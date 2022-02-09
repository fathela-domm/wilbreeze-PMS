import * as React from 'react';
import { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import { Input, OutlinedInput } from "@mui/material/";
import "./properties.component.css";
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "fit-content",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
};
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

const nearbyAreaLabels = [
    "Bus Stop",
    "Hospital",
    "School",
    "Sea View"
];

const externalFeaturesLabels = [
    "Balcony",
    "BBQ",
    "CCTV",
    "Electric Fence",
    "Borehole",
    "Garden",
    "Parking",
    "Swimming Pool",
]

const internalFeaturesLabels = [
    "Aircon",
    "Alarm",
    "Backup Generator",
    "En Suite",
    "Walk In Closet",
]

export function UpdatePropertyComponent({ showUpdateModal, setShowUpdateModal, propertyId, setRows }) {
    const [name, setName] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [minPrice, setMinPrice] = React.useState("");
    const [maxPrice, setMaxPrice] = React.useState("");
    const [active, setActive] = React.useState("true");
    const [phase, setPhase] = React.useState("");
    const [type, setType] = React.useState("Residential Land");
    const [overview, setOverview] = React.useState("");
    const [externalFeatures, setExternalFeatures] = React.useState(["Balcony", "CCTV"]);
    const [internalFeatures, setInternalFeatures] = React.useState(["Aircon", "Alarm"]);
    const [nearby, setNearby] = React.useState(["Bus Stop", "Hospital"]);
    const [files, setFiles] = React.useState([]);
    const [isUploading, setIsUploading] = React.useState(false);
    let [uploadError, setUploadError] = React.useState("");
    const firestore = new FirestoreService("/");

    React.useLayoutEffect(() => {
        firestore.getAll()
            .then(snapshot => {
                for (let id in snapshot.val()) {
                    if (id == "properties") {
                        Object.keys(snapshot.val()[id])
                            .map(key => {
                                if (key === propertyId) {
                                    setName(snapshot.val()[id][key]["name"]);
                                    setLocation(snapshot.val()[id][key]["location"]);
                                    setMinPrice(snapshot.val()[id][key]["minPrice"]);
                                    setMaxPrice(snapshot.val()[id][key]["maxPrice"]);
                                    setActive(snapshot.val()[id][key]["active"]);
                                    setInternalFeatures(snapshot.val()[id][key]["internalFeatures"]);
                                    setExternalFeatures(snapshot.val()[id][key]["externalFeatures"]);
                                    setNearby(snapshot.val()[id][key]["nearby"]);
                                    setType(snapshot.val()[id][key]["type"]);
                                    setOverview(snapshot.val()[id][key]["overview"]);
                                    setPhase(snapshot.val()[id][key]["phase"]);
                                }
                            });
                    }
                }
            })
            .catch(err => console.error(err));
    }, []);

    const classes = useStyles();
    const changeHandler = {
        handleNameChange: (event) => {
            setName(event.target.value);
        },

        handleLocationChange: (event) => {
            setLocation(event.target.value);
        },
        handleMinPriceChange: (event) => {
            setMinPrice(event.target.value);
        },
        handleMaxPriceChange: (event) => {
            setMaxPrice(event.target.value);
        },
        handleActiveChange: (event) => {
            setActive(event.target.value)
        },
        handleTypeChange: (event) => {
            setType(event.target.value)
        },
        handlePhaseChange: (event) => {
            setPhase(event.target.value)
        },
        handleOverviewChange: (event) => {
            setOverview(event.target.value)
        },
        handleNearbyChange: (event) => {
            const {
                target: { value }
            } = event;
            setNearby(
                // On autofill we get a the stringified value.
                typeof value === "string" ? value.split(",") : value
            );
        },
        handleExternalFeaturesChange: (event) => {
            const {
                target: { value }
            } = event;
            setExternalFeatures(
                // On autofill we get a the stringified value.
                typeof value === "string" ? value.split(",") : value
            );
        },
        handleInternalFeaturesChange: (event) => {
            const {
                target: { value }
            } = event;
            setInternalFeatures(
                // On autofill we get a the stringified value.
                typeof value === "string" ? value.split(",") : value
            );
        },
        handleImageUploadZoneChange: (files) => {
            setFiles(files);
        }
    }

    const handleSubmit = (e) => {
        setIsUploading(true);
        e.preventDefault()
        // upload images to firebase and get back the storage urls
        const dataToUpload = {
            name: name,
            location: location,
            minPrice: minPrice,
            maxPrice: maxPrice,
            active: active,
            phase: phase,
            type: type,
            overview: overview,
            externalFeatures: externalFeatures,
            internalFeatures: internalFeatures,
            nearby: nearby,
        }

        setUploadError("");
        firestore.update("/properties/" + propertyId, dataToUpload)
            .then(res => {
                let data = [];
                firestore.getAll()
                    .then(snapshot => {
                        for (let id in snapshot.val()) {
                            if (id == "properties") {
                                Object.keys(snapshot.val()[id])
                                    .map(key => {
                                        data.push({ ...snapshot.val()[id][key], id: key })
                                    });
                            }
                        }
                    })
                    .then(snapshot => setRows(data))
                    .then(snapshot => { setIsUploading(false); setShowUpdateModal(false); })
            })
            .catch(err => { setUploadError("An error has occured when processing the request. Please check your network connectivity."); setIsUploading(false); console.error(err) });
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showUpdateModal}
            onClose={() => setShowUpdateModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}

            style={{ overflow: "scroll" }}
        >
            <Fade in={showUpdateModal}>
                <Card sx={style}>
                    <div style={{ display: "flex", flexDirection: "row", width: "100%", marginTop: "10px", justifyContent: "space-between" }}>
                        <Typography id="transition-modal-title" style={{ textAlign: "center" }} variant="h4" component="h2">
                            Update Property
                        </Typography>
                        <button type="button" onClick={() => { setShowUpdateModal(false); setIsUploading(false) }} className="btn btn-danger ml-3">Cancel</button>
                    </div>
                    <Typography id="transition-modal-description" style={{ textAlign: "center", color: "red", top: "-20px" }} className="error-area" sx={{ mt: 2 }}>
                        {uploadError}
                    </Typography>

                    {/* creation form */
                        isUploading ? <div className="circular-progress"><CircularProgress style={{ zoom: 2.3 }} /></div> : (
                            <ValidatorForm
                                className="pt-4 row col-sm-12 "
                                onSubmit={handleSubmit}
                                onError={errors => console.log(errors)}
                                style={{
                                    width: "100%"
                                }}
                            >
                                <div className="col-sm-6">
                                    <TextValidator
                                        label="Property Name"
                                        onChange={changeHandler.handleNameChange}
                                        name="name"
                                        value={name}
                                        validators={['required']}
                                        style={{
                                            width: "100%",
                                            marginTop: "20px"
                                        }}
                                        errorMessages={['this field is required']}
                                    />
                                    <TextValidator
                                        label="Located At"
                                        onChange={changeHandler.handleLocationChange}
                                        name="Located At"
                                        value={location}
                                        validators={['required']}
                                        style={{
                                            marginTop: "20px",
                                            width: "100%"
                                        }}
                                        errorMessages={['this field is required']}
                                    />
                                    <TextValidator
                                        label="Min Price"
                                        onChange={changeHandler.handleMinPriceChange}
                                        name="Min Price"
                                        type="number"
                                        value={minPrice}
                                        validators={['required']}
                                        style={{
                                            marginTop: "20px",
                                            width: "100%"
                                        }}
                                        errorMessages={['this field is required']}
                                    />
                                    <TextValidator
                                        label="Max Price"
                                        onChange={changeHandler.handleMaxPriceChange}
                                        name="Max Price"
                                        value={maxPrice}
                                        type="number"
                                        validators={['required']}
                                        style={{
                                            marginTop: "20px",
                                            width: "100%"
                                        }}
                                        errorMessages={['this field is required']}
                                    />
                                    <TextValidator
                                        label="Phase"
                                        onChange={changeHandler.handlePhaseChange}
                                        name="Phase"
                                        value={phase}
                                        validators={['required']}
                                        style={{
                                            marginTop: "20px",
                                            width: "100%"
                                        }}
                                        errorMessages={['this field is required']}
                                    />
                                    <TextValidator
                                        label="Property Overview"
                                        onChange={changeHandler.handleOverviewChange}
                                        name="Overview"
                                        value={overview}
                                        validators={['required']}
                                        style={{
                                            marginTop: "12px",
                                            width: "100%"
                                        }}
                                        errorMessages={['this field is required']}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <div className="selects mt-2">
                                        <FormControl style={{
                                            width: "100%"
                                        }} className={classes.formControl}>
                                            <SelectValidator
                                                label="Type"
                                                onChange={changeHandler.handleTypeChange}
                                                name="Type"
                                                value={type}
                                                validators={['required']}
                                                style={{
                                                    marginTop: "10px",
                                                    width: "100%"
                                                }}
                                                errorMessages={['this field is required']}>

                                                <MenuItem value={"Industrial Property"}>
                                                    <ListItemText primary={"Industrial Property"} />
                                                </MenuItem>
                                                <MenuItem value={"Commercial Property"}>
                                                    <ListItemText primary={"Commercial Property"} />
                                                </MenuItem>
                                                <MenuItem value={"Residential Land"}>
                                                    <ListItemText primary={"Residential Land"} />
                                                </MenuItem>
                                                <MenuItem value={"SpecialUse Land"}>
                                                    <ListItemText primary={"SpecialUse Lan"} />
                                                </MenuItem>

                                            </SelectValidator>
                                        </FormControl>
                                        <FormControl style={{
                                            width: "100%"
                                        }} className={classes.formControl}>
                                            <SelectValidator
                                                label="Active"
                                                onChange={changeHandler.handleActiveChange}
                                                name="Active"
                                                value={active}
                                                validators={['required']}
                                                style={{
                                                    marginTop: "10px",
                                                    width: "100%"
                                                }}
                                                errorMessages={['this field is required']}>

                                                <MenuItem value={"true"}>
                                                    <ListItemText primary={"True"} />
                                                </MenuItem>
                                                <MenuItem value={"false"}>
                                                    <ListItemText primary={"False"} />
                                                </MenuItem>
                                            </SelectValidator>
                                        </FormControl>

                                        <FormControl style={{ width: "100%", top: "20px" }} className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">
                                                Nearby Amenities
                                            </InputLabel>
                                            <Select
                                                style={{
                                                    width: "100%"
                                                }}
                                                labelId="Nearby Amenities"
                                                // id="demo-mutiple-checkbox"
                                                multiple
                                                value={nearby}
                                                name="nearby"
                                                onChange={changeHandler.handleNearbyChange}
                                                input={<OutlinedInput label="Tag" />}
                                                renderValue={(selected) => selected.map(name => name).join(", ")}
                                            >
                                                {nearbyAreaLabels.map((element) => (
                                                    <MenuItem key={Math.random()} value={element}>
                                                        <Checkbox checked={nearby.indexOf(element) > -1} />
                                                        <ListItemText primary={element} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl style={{ width: "100%", top: "20px" }} className={classes.formControl}>
                                            <InputLabel htmlFor="external-native-simple">
                                                External Features
                                            </InputLabel>
                                            <Select
                                                labelId="External Features"
                                                // id="demo-mutiple-checkbox"
                                                multiple
                                                style={{
                                                    width: "100%"
                                                }}
                                                value={externalFeatures}
                                                name="external-native-simple"
                                                onChange={changeHandler.handleExternalFeaturesChange}
                                                input={<OutlinedInput label="Tag" />}
                                                renderValue={(selected) => selected.map(name => name).join(", ")}
                                            >
                                                {externalFeaturesLabels.map((element) => (
                                                    <MenuItem key={Math.random()} value={element}>
                                                        <Checkbox checked={externalFeatures.indexOf(element) > -1} />
                                                        <ListItemText primary={element} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl style={{ width: "100%", top: "20px" }} className={classes.formControl}>
                                            <InputLabel htmlFor="external-native-simple">
                                                Internal Features
                                            </InputLabel>
                                            <Select
                                                style={{
                                                    width: "100%"
                                                }}
                                                labelId="Internal Features"
                                                // id="demo-mutiple-checkbox"
                                                multiple
                                                value={internalFeatures}
                                                name="internal-native-simple"
                                                onChange={changeHandler.handleInternalFeaturesChange}
                                                input={<OutlinedInput label="Tag" />}
                                                renderValue={(selected) => selected.map(name => name).join(", ")}
                                            >
                                                {internalFeaturesLabels.map((element) => (
                                                    <MenuItem key={Math.random()} value={element}>
                                                        <Checkbox checked={internalFeatures.indexOf(element) > -1} />
                                                        <ListItemText primary={element} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="row ml-3 mt-3" style={{ width: "100%" }}>
                                    <button disabled={isUploading} className='btn btn-primary' type="submit">Submit</button>
                                </div>
                            </ValidatorForm>
                        )
                    }

                </Card>
            </Fade>
        </Modal >
    );
}

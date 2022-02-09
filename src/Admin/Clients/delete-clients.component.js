import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { storage } from "../../Backend/Firebase/firebase.config";
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import { ref, deleteObject, listAll } from "firebase/storage";

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

export function DeleteClientsComponent({ clientId, showDeleteModal, setShowDeleteModal, clientName, setRows }) {
    const [uploadError, setUploadError] = React.useState("");
    const firestore = new FirestoreService("/");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const handleSubmit = () => {
        setIsDeleting(true);
        setUploadError("");
        firestore.delete("users/" + clientId)
            .then(res => {
                // loaad updated rows data 
                let data = [];
                firestore.getAll()
                    .then(snapshot => {
                        for (let id in snapshot.val()) {
                            if (id == "users") {
                                Object.keys(snapshot.val()[id])
                                    .map(key => {
                                        if (!snapshot.val()[id][key]["isAdmin"])
                                            data.push({ ...snapshot.val()[id][key], id: key })
                                    });
                            }
                        }
                    })
                    .then(snapshot => setRows(data))
                    .then(snapshot => { setIsDeleting(false); setShowDeleteModal(false); })
                    .catch(err => { setUploadError("An error has occured when processing the request. Please check your network connectivity."); setIsDeleting(false); });
                // close delete modal
                setShowDeleteModal(false);
            })
            .catch(err => { setUploadError("An error has occured when processing the request. Please check your network connectivity."); setIsDeleting(false); });
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showDeleteModal}
            onClose={() => { setShowDeleteModal(false); setUploadError("") }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}

            style={{ overflow: "scroll" }}
        >
            <Fade in={showDeleteModal}>
                <Card sx={style}>
                    <Typography id="transition-modal-title" style={{ textAlign: "center" }} variant="h4" component="h2">
                        Delete Client
                    </Typography>
                    <Typography id="transition-modal-description" style={{ textAlign: "center", color: "red", top: "-20px" }} className="error-area" sx={{ mt: 2 }}>
                        {uploadError}
                    </Typography>
                    {
                        isDeleting ? <div className="circular-progress"><CircularProgress style={{ zoom: 2.3 }} /></div> : (
                            <>
                                <div className='row mt-3'>
                                    <Typography id="transition-modal-description" style={{ textAlign: "center", color: "#444", top: "-20px" }} className="error-area" sx={{ mt: 2 }}>
                                        Are you sure you want to delete user {clientName}?
                                    </Typography>
                                </div>
                                <div className='row mt-4' style={{ justifyContent: "space-between" }}>
                                    <button onClick={handleSubmit} className="btn btn-danger">Delete</button>
                                    <button onClick={() => setShowDeleteModal(false)} className="btn btn-primary">Cancel</button>
                                </div>
                            </>
                        )
                    }
                </Card>
            </Fade>
        </Modal>
    )
}
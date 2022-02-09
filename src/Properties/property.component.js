import React, { useEffect } from 'react'
import { NavbarComponent } from "../Services/navbar.component";
import { BannerComponent } from "../Services/banner.component";
import { SearchPropertyComponent } from "./search-property.component";
import { SearchFilterComponent } from "./search-filter.component";
import { PropertiesListComponent } from "./properties-list.component";
import { FirestoreService } from "../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import { CircularProgress } from "@mui/material";

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export function PropertyComponent(props) {
    const [properties, setProperties] = React.useState([]);
    const [isLoadingPropertiesData, setIsLoadingPropertiesData] = React.useState(true);
    const firestore = new FirestoreService("/");

    React.useEffect(() => {
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
            .then(snapshot => setProperties(data))
            .then(snapshot => setIsLoadingPropertiesData(false))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <ScrollToTopOnMount />
            <NavbarComponent />
            <BannerComponent />

            {/* actual component */}
            <section className="col-sm-10 mt-4 mb-4 pb-4" style={{ margin: "auto", background: "#ccc" }}>
                <SearchPropertyComponent setIsLoadingPropertiesData={setIsLoadingPropertiesData} properties={properties} setProperties={setProperties} />
                <SearchFilterComponent setIsLoadingPropertiesData={setIsLoadingPropertiesData} properties={properties} setProperties={setProperties} />
                {
                    isLoadingPropertiesData ? <div className="circular-progress"><CircularProgress style={{ zoom: 2.3, "marginTop": "10px" }} /></div> : <PropertiesListComponent setProperties={setProperties} data={properties} />
                }
            </section>
        </>
    )
}

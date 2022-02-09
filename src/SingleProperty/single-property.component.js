import React from 'react';
import { NavbarComponent } from "../Contact/navbar.component";
import { CarouselComponent } from "./carousel.component";
import { FirestoreService } from "../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import { useParams } from "react-router-dom";
import { PropertySummaryComponent } from "./property-summary.component"
import { Footer } from "../Home/footer";

export function SinglePropertyComponent(props) {
    const [properties, setProperties] = React.useState([]);
    const [isLoadingPropertiesData, setIsLoadingPropertiesData] = React.useState(true);
    const firestore = new FirestoreService("/");
    const { propertyId } = useParams();

    React.useEffect(() => {
        firestore.getAll()
            .then(snapshot => {
                for (let id in snapshot.val()) {
                    if (id == "properties") {
                        Object.keys(snapshot.val()[id])
                            .map(key => {
                                key == propertyId && setProperties({ ...snapshot.val()[id][key], id: key })
                            });
                    }
                }
            })
            .then(snapshot => setIsLoadingPropertiesData(false))
            .catch(err => console.error(err));
    }, []);

    return !isLoadingPropertiesData && (
        <>
            <NavbarComponent />
            <CarouselComponent property={properties} />
            <PropertySummaryComponent property={properties} />
            <Footer />
        </>
    )
}

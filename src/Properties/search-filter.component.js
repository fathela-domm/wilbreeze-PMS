import React from 'react'
import { FirestoreService } from "../Backend/Firebase/FirebaseServices/cloud-firestore.module";

export function SearchFilterComponent({ setIsLoadingPropertiesData, setProperties, properties }) {
    const firestore = new FirestoreService("/");

    const handleClick = () => {
        setIsLoadingPropertiesData(true)
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
    }

    return (
        <div className="category-search-filter">
            <div className="row">
                <div className="col-md-6">
                    <h4 className='text-secondary'>Our Properties</h4>
                </div>
                <div className="col-md-6" >
                    <div className="view cursor-pointer" style={{ cursor: "pointer" }} onClick={handleClick}>
                        <strong>Refresh</strong>
                        <ul className="list-inline view-switcher" >
                            <li className="list-inline-item">
                                <i className="fa fa-refresh"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

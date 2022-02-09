import React from 'react';
import { FirestoreService } from "../Backend/Firebase/FirebaseServices/cloud-firestore.module";

export const SearchPropertyComponent = ({ setProperties, setIsLoadingPropertiesData, properties }) => {
    const firestore = new FirestoreService();
    const loadWholeDataSet = () => {
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

    function handlePropertyNameSearch(e) {
        let searchTerm = e.target.value;
        if (searchTerm !== "") {
            const regExp = new RegExp(`^${searchTerm}`, "gi");

            // filter properties by name
            let filteredData = [];
            properties.map(property => {
                property.name.match(regExp) && filteredData.push(property);
            });

            return setProperties(filteredData);
        }
        return loadWholeDataSet();
    }

    function handlePropertyTypeChange(e) {
        let searchTerm = e.target.value;
        if (searchTerm !== "") {
            const regExp = new RegExp(`^${searchTerm}`, "gi");

            // filter properties by type
            let filteredData = [];
            properties.map(property => {
                property.type.match(regExp) && filteredData.push(property);
            });

            return setProperties(filteredData);
        }
        return loadWholeDataSet();
    }
    function handlePropertyLocationSearch(e) {
        let searchTerm = e.target.value;
        if (searchTerm !== "") {
            const regExp = new RegExp(`^${searchTerm}`, "gi");

            // filter properties by location
            let filteredData = [];
            properties.map(property => {
                property.location.match(regExp) && filteredData.push(property);
            });

            return setProperties(filteredData);
        }
        return loadWholeDataSet();
    }

    return (
        <section className="page-search">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="advance-search">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <input type="text" onInput={handlePropertyNameSearch} className="form-control my-2 my-lg-0" id="inputtext4"
                                        placeholder="What are you looking for" />
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="text" onInput={handlePropertyTypeChange} className="form-control my-2 my-lg-0" id="inputCategory4" placeholder="Search by category" />
                                </div>
                                <div className="form-group col-md-4">
                                    <input onInput={handlePropertyLocationSearch} type="text" className="form-control my-2 my-lg-0" id="inputLocation4" placeholder="Search by location" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

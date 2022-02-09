import React from 'react'
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format"

export function PropertySummaryComponent({ property }) {

    return (
        <div className='container'>
            <div className='col-8'>
                <div className="ad-listing-content">
                    <div>
                        <p style={{ fontSize: "25px", fontWeight: "400" }}>
                            {property.type}
                        </p>
                    </div>
                    <ul className="list-inline mt-2 mb-3">
                        <li className="list-inline-item">
                            {property.name + " @"}
                        </li>
                        <li className="list-inline-item">
                            <p className='text-primary'>{property.location}</p>
                        </li>
                    </ul>
                    <p className="pr-5">{property.overview}</p>
                    <br />
                    <div style={{ display: "flex", width: "100%", maxWidth: "max-content" }}>
                        <CurrencyFormat className='text-danger' style={{ fontSize: "18px", fontWeight: "400" }} value={parseInt(property.minPrice)} displayType={'text'} thousandSeparator={true} prefix={'KSH: '} />
                        <i className="text-danger pr-2 pl-2">{" - "}</i>
                        <CurrencyFormat className='text-danger' style={{ fontSize: "18px", fontWeight: "400" }} value={parseInt(property.maxPrice)} displayType={'text'} thousandSeparator={true} prefix={'KSH: '} />
                    </div>
                    <br />
                    <p className="pr-5">Phase: {property.phase}</p>
                    <br />

                    <div className="mt-2 col-sm-12 mb-3">
                        <h4 className="text-secondary" style={{ fontSize: "25px", fontWeight: "400" }}>Amenities</h4>
                        <div style={{ width: "100%" }} className="list-group mt-2">
                            <div className="list-group-item text-center list-group-item-action bg-success">
                                Internal Features
                            </div>
                            {
                                property.internalFeatures.map(feature => {
                                    return (
                                        <div key={Math.random()} className="list-group-item list-group-item-action">{feature}</div>
                                    )
                                })
                            }
                        </div>

                        <div style={{ width: "100%" }} className="list-group mt-3">
                            <div className="list-group-item text-center list-group-item-action  bg-success">
                                Nearby Amenities
                            </div>
                            {
                                property.nearby.map(feature => {
                                    return (
                                        <div key={Math.random()} className="list-group-item list-group-item-action">{feature}</div>
                                    )
                                })
                            }
                        </div>

                        <div style={{ width: "100%" }} className="list-group mt-3">
                            <div className="list-group-item text-center list-group-item-action bg-success">
                                External Features
                            </div>
                            {
                                property.externalFeatures.map(feature => {
                                    return (
                                        <div key={Math.random()} className="list-group-item list-group-item-action">{feature}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

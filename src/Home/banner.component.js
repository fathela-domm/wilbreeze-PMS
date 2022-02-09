import React from 'react';
import { Link } from "react-router-dom"

export function BannerComponent(props) {
    return (
        <section className="banner-area py-5" id="banner-4">
            <div className="overlay feature-overlay"></div>
            <div className="container">
                <div className="row  align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-9">
                        <div className="banner-content2 text-center style-2">
                            <h1 className="display-4 mb-4 ">
                                Industry Leading Real Estate Service Solutions
                            </h1>

                            <p className="lead mb-5 pr-0" style={{ textTransform: "capitalize" }}>
                                exceptional services for exceptional clients since we are at the epicenter of commercial real estate
                            </p>

                            <p className="mb-0">
                                <Link to="properties" className="btn btn-white btn-circled">
                                    Purchase now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

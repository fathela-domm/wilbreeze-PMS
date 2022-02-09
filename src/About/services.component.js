import React from 'react'

export function ServicesComponent(props) {
    return (
        <section className="section" id="services-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 text-center">
                        <div className="section-heading">
                            <h2 className="section-title mb-2 text-white">
                                Real Estate Services
                            </h2>

                            <p className="mb-5 text-white">
                                Our team of experts will help you secure residential land, property or even special purpose real estate in your region of choice at an affordable price.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                        <div className="web-service-block">
                            <i className="fas fa-home"></i>
                            <h3>Land</h3>
                            <p>Exceptional land near towns, flocking with public amenities</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                        <div className="web-service-block">
                            <i className="fas fa-bed"></i>
                            <h3>Residential Properties</h3>
                            <p>Securing a dream home for you is our passion</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                        <div className="web-service-block">
                            <i className="ti-light-bulb"></i>
                            <h3>Special Purpose Real Estate</h3>
                            <p>Acquire land to build a school, church, mall,hotel etc </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

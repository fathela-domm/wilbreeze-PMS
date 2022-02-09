import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function ServiceStepsComponent(props) {
    return (
        <section className="section" id="process">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 text-center">
                        <div className="section-heading">
                            <h2 className="section-title">
                                Our Working process
                            </h2>

                            <p>
                                With us you can purchase land or even your very own exceptional dream home seamlessly
                            </p>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="process-block">
                            <LazyLoadImage
                                alt={"/assets/images/b1.jpg"}
                                height="300"
                                style={{
                                    height: "250px"
                                }}
                                className="img-fluid"
                                src={"/assets/images/process/3.jpg"}
                            />
                            <h4 style={{ textTransform: "lowercase" }}>Find Us</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="process-block">
                            <LazyLoadImage
                                alt={"/assets/images/b1.jpg"}
                                style={{
                                    height: "250px"
                                }}
                                className="img-fluid"
                                src={"/assets/images/process/1.jpg"}
                            />
                            <h4 style={{ textTransform: "lowercase" }}>Make us an offer</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="process-block">
                            <LazyLoadImage
                                alt={"/assets/images/b1.jpg"}
                                height="300"
                                style={{
                                    height: "250px"
                                }}
                                className="img-fluid"
                                src={"/assets/images/process/2.jpg"}
                            />
                            <h4 style={{ textTransform: "lowercase" }}>final walkthrough</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

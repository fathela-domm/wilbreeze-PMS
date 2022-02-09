import React from 'react'
import { Link } from 'react-router-dom'

export function ServiceCarouselComponent(props) {
    return (
        <section className="pt-5 service-wrap">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-8 offset-lg-4">
                        <div className="carousel slide " id="service-carousel" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service-block media">
                                                    <div className="service-icon">
                                                        <i className="ti-reload"></i>
                                                    </div>
                                                    <div className="service-inner-content media-body">
                                                        <h4>Providing exceptional homes</h4>
                                                        <p>Always ready to make your dream home a reality.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service-block media">
                                                    <div className="service-icon">
                                                        <i className="fas fa-home"></i>
                                                    </div>
                                                    <div className="service-inner-content media-body">
                                                        <h4>Offering you an elite property</h4>
                                                        <p>Our team of experts is ready to match you with the right property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="service-block media">
                                                    <div className="service-icon">
                                                        <i className="ti-world"></i>
                                                    </div>
                                                    <div className="service-inner-content media-body">
                                                        <h4>Propery Referral</h4>
                                                        <p>Highly motivated to help you own your dream property</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service-block media">
                                                    <div className="service-icon">
                                                        <i className="ti-server"></i>
                                                    </div>
                                                    <div className="service-inner-content media-body">
                                                        <h4>Affordable Homes</h4>
                                                        <p>Purchase an exeptional home at your own price </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <p className="pl-3">Want to know more about this? <Link to="/contact">Contact us</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

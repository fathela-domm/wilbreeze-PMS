import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateValue } from "../Backend/Contexts/state-provider.module"

export function ProjectWrapComponent(props) {
    const [{ company }, dispatch] = useStateValue();
    return (
        <>
            <section className="section" id="projects-wrap">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h1 className="text-white">
                                    Our teams of real estate experts have a solid understanding of the local market supported by the tried and tested marketing strategies we embed within our operations.
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="lead text-white">
                                {company} is a professional real estate firm specializing in the development of residential and commercial real estate. We offer real estate solutions to investors, property owners, buyers and developers in both residential and commercial real estate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className='section-bottom'>
                <div className="row py-4">
                    <div className="col-lg-7 col-md-12 col-sm-12 ">
                        <div className="single-project">
                            <LazyLoadImage
                                src={"/assets/images/bl.jpg"}
                                alt="/assets/images/b2.jpg"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="project-content-block">
                            <h4>Do you know who we are?</h4>
                            <h2>More than just service your products...</h2>
                            <p>We strive to provide our clients with exceptional customer service and exceed their expectations, ensuring our clients get return on their investments.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

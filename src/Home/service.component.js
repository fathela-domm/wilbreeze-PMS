import React from 'react';
import { img } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function ServiceComponent(props) {
    return (
        <section className="bg-grey" id="service">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-4">
                        <div className="service-img">
                            <img
                                alt={"/assets/images/blog-lg.jpg"}
                                src={"/assets/images/b2.jpg"} // use normal <img> attributes as props
                                className='img-fluid'
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 pl-4">
                        <div className="service-content">
                            <h1>Get a better deal and start saving money today</h1>
                            <p>We compare hundreds of leading products and plans across many categories to bring you the
                                best value for money.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

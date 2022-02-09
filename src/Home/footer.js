import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Backend/Contexts/state-provider.module';

export function Footer(props) {
    const currentYear = new Date(Date.now()).getFullYear();
    const [{ company }, dispatch] = useStateValue();
    return (
        <footer className="section " id="footer">
            <div className="overlay footer-overlay"></div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-sm-12">
                        <div className="footer-widget">
                            <Link to="//" className="footer-brand text-white">
                                {company}
                            </Link>
                            <p>We strive to provide our clients with exceptional customer service and exceed their expectations, ensuring our clients get return on their investments. </p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="footer-widget">
                            <h3>About</h3>
                            <ul className="footer-links ">
                                <li>
                                    <Link to="/services">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/properties">
                                        Properties
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row text-right pt-5">
                    <div className="col-lg-12">
                        <p className="footer-copy ">
                            &copy; Copyright <span className="current-year">{currentYear}</span> All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

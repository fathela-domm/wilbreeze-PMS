import React from 'react'
import { useStateValue } from '../Backend/Contexts/state-provider.module'

export function ContactInfoComponent(props) {
    const [{ address, email, phone }, dispatch] = useStateValue();
    return (
        <section id="contact-info">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-info-block text-center">
                            <i className="pe-7s-map-marker"></i>
                            <h4>Address</h4>
                            <p className="lead">{address}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-info-block text-center">
                            <i className="pe-7s-mail"></i>
                            <h4>Email</h4>
                            <p className="lead">{email}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-info-block text-center">
                            <i className="pe-7s-phone"></i>
                            <h4>Phone Number</h4>
                            <p className="lead">{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

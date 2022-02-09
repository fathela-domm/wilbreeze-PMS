import React, { useState } from 'react';
import { useStateValue } from '../Backend/Contexts/state-provider.module';
import { useNavigate } from "react-router";
import { FirestoreService } from "../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import { getItem } from "../Backend/local-storage-service.module";

export function CommentsFormComponent(props) {
    const [state, dispatch] = useStateValue();
    const user = getItem("user");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // email, subject, phone,message,name
        if (document.getElementById("name").value !== "" && document.getElementById("phone").value !== "" && document.getElementById("email").value && document.getElementById("message").value !== "") {
            setShowErrorMessage(false);
            const dataToSubmit = {
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                comment: document.getElementById("message").value,
                dateCreate: new Date(Date.now()).toISOString(),
            }
            let firestore = new FirestoreService("/");
            return firestore.create("comments", dataToSubmit)
                .then(res => {
                    if (document.getElementById("contact")) {
                        document.getElementById("contact").style = "display:none";
                    }
                })
        }
        return setShowErrorMessage(true)
    }
    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-8 col-lg-6">
                        <h5>Leave a Message</h5>
                        <h2 className="section-title mb-2 ">
                            Tell us about <span className="font-weight-normal">yourself</span>
                        </h2>

                        <p className="mb-5 ">
                            Whether you have questions or you would just like to say hello, contact us.
                        </p>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-success contact__msg" style={{ display: "none" }} role="alert">
                                    Your message was sent successfully.
                                </div>
                            </div>
                        </div>
                        {
                            showErrorMessage && <span className="text-danger col-12" style={{ marginBottom: "30px", textAlign: "center", width: "100%" }}>All fields are required</span>
                        }
                        <form className="contact_form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6 mb-6">
                                    <div className="form-group">
                                        <label className="h6 small d-block text-uppercase">
                                            Your name
                                            <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                                            <input className="form-control" name="name" id="name" required placeholder="John Doe" type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 mb-6">
                                    <div className="form-group">
                                        <label className="h6 small d-block text-uppercase">
                                            Your email address
                                            <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group ">
                                            <input className="form-control" name="email" id="email" required placeholder="john@gmail.com" type="email" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100"></div>

                                <div className="col-sm-6 mb-6">
                                    <div className="form-group">
                                        <label className="h6 small d-block text-uppercase">
                                            Your Phone Number
                                            <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group ">
                                            <input className="form-control" id="phone" name="phone" required placeholder="1-800-643-4500" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-5">
                                <label className="h6 small d-block text-uppercase">
                                    How can we help you?
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">
                                    <textarea className="form-control" rows="4" name="message" id="message" required placeholder="Hi there, I would like to ..."></textarea>
                                </div>
                            </div>

                            <div className="">
                                <input name="submit" type="submit" onChange={handleSubmit} onClick={handleSubmit} className="btn btn-primary btn-circled" value="Send Message" />

                                <p className="small pt-3">We'll get back to you in 1-2 business days.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

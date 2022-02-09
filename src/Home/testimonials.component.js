import React from 'react'
import { CommentsFormComponent } from './comments-form.component'
import { FirestoreService } from "../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import {
    CircularProgress
} from "@mui/material";

export function TestimonialsComponent(props) {
    const [comments, setComments] = React.useState([]);
    const [isLoadingCommentsData, setIsLoadingCommentsData] = React.useState(true);
    const firestore = new FirestoreService("/");
    React.useLayoutEffect(() => {
        let data = [];
        firestore.getAll()
            .then(snapshot => {
                for (let id in snapshot.val()) {
                    if (id == "comments") {
                        Object.keys(snapshot.val()[id])
                            .map(key => {
                                data.push({ ...snapshot.val()[id][key], id: key })
                            });
                    }
                }
            })
            .then(snapshot => setComments(data))
            .then(snapshot => setIsLoadingCommentsData(false))
            .catch(err => console.error(err));
    }, []);

    return !isLoadingCommentsData ? (
        <section className="section" id="section-testimonial">
            <div className="container">
                <div className="row ml-3">
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        {/* <div className="section-heading testimonial-heading"> */}
                        <h1>What they say <br />about us</h1>
                        <p>We value your opionion and thoughts as a company. We try to improve the services we offer to you based on your comments</p>
                        {/* </div> */}
                    </div>
                    <div className="col-lg-8 row col-sm-12 col-md-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="test-inner ">
                                    <div className="test-author-thumb d-flex">
                                        <img src="/static/images/avatars/comments_avatar.jpg" alt="Testimonial author" className="img-fluid" />
                                        <div className="test-author-info">
                                            <h4>Peter Bobic</h4>
                                        </div>
                                    </div>

                                    I just love the client handling skills of the personnel in this company.
                                    It's simply superb

                                    <i className="fa fa-quote-right"></i>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="test-inner ">
                                    <div className="test-author-thumb d-flex">
                                        <img src="/static/images/avatars/comments_avatar.jpg" alt="Testimonial author" className="img-fluid" />
                                        <div className="test-author-info">
                                            <h4>Dommy Kamau</h4>
                                        </div>
                                    </div>

                                    I was able to purchase a property at Muguga township with so much ease. I can't believe that my dreams have finally been made a reality. Thank you

                                    <i className="fa fa-quote-right"></i>
                                </div>
                            </div>

                            {
                                comments.slice(Math.max(comments.length - 10, 0)).map((comment, i) => {
                                    return i > comments.length - 10 && (
                                        <div key={Math.random()} className="col-lg-6">
                                            <div className="test-inner ">
                                                <div className="test-author-thumb d-flex">
                                                    <img src="/static/images/avatars/comments_avatar.jpg" alt="Testimonial author" className="img-fluid" />
                                                    <div className="test-author-info">
                                                        <h4>{comment.name}</h4>
                                                    </div>
                                                </div>
                                                {comment.comment}
                                                <i className="fa fa-quote-right"></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/* comment section from the database */}
                            <CommentsFormComponent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <div className="circular-progress mt-3"><CircularProgress style={{ zoom: 2.3 }} /></div>
    )
}

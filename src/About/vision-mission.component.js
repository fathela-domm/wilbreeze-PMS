import React from 'react'

export function VisionMissionComponent(props) {

    return (
        <section className='col-sm-12 row'>
            <div className="card col-sm m-4">
                <div className="card-header">
                    Our Core Values
                </div>
                <div className="card-body">
                    We purpose to:
                    <div style={{ paddingLeft: "30px" }}>
                        <ul>
                            <li>
                                Go beyond selling products and services to our clients;
                            </li>
                            <li>
                                Delight our Partners;
                            </li>
                            <li>
                                Motivate out Teams; Celebrate our Management;
                            </li>
                            <li>
                                Make our brand recognizable and ethical
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card col-sm m-4">
                <div className="card-header">
                    Basic principles
                </div>
                <div className="card-body">
                    We achieve our purpose through these pillars:
                    <div style={{ paddingLeft: "30px" }}>
                        <ul>
                            <li>Integrity</li>
                            <li>Transparency</li>
                            <li>Colaboration</li>
                            <li>Focus</li>
                            <li>Credibility</li>
                            <li>Professionalism</li>
                            <li>Timeliness</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

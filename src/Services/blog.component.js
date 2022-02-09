import React from 'react'
import "./blog.component.css"
import { useStateValue } from '../Backend/Contexts/state-provider.module'

export function BlogComponent(props) {
    const [{ company }, dispatch] = useStateValue();
    return (
        <section className="service-blog  col-sm-10 mt-4 mb-4" style={{ margin: "auto" }}>
            <div className='service-blog-header col-sm '>
                <div className='row col-lg-12'>
                    <div className="service-blog-header-left col-lg-6">
                        <h2 style={{ fontWeight: "bolder", }} className="service-blog-header-left-header text-capitalize mb-2">
                            What we Do.
                        </h2>
                        <div style={{ width: "15%" }}>
                            <hr style={{ backgroundColor: "orange", height: "3px", }} />
                        </div>
                        <div style={{ fontSize: "18px" }} className="service-blog-header-left mt-2">
                            As {company} we provide our clients with viable and quality real estate investment opportunities that fulfil our client’s aspirations.

                            We offer customized advice and real estate solutions that cater for the unique needs of our clients and to maximize potential and optimal value of our clients’ assets.
                        </div>
                    </div>
                    <div className="service-blog-header-right pt-4 col-lg-6">
                        <div className='service-blog-header-body pt-3'>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="badge mr-3 badge-primary badge-pill">1</span>
                                    Market Analysis & Site Acquisition
                                </li>
                                <li className="list-group-item">
                                    <span className="badge mr-3 badge-primary badge-pill">2</span>
                                    Property Appraisal & Valuation
                                </li>
                                <li className="list-group-item">
                                    <span className="badge mr-3 badge-primary badge-pill">3</span>
                                    Development Consultancy & Advisory
                                </li>
                                <li className="list-group-item">
                                    <span className="badge mr-3 badge-primary badge-pill">4</span>
                                    Project Management
                                </li>
                                <li className="list-group-item">
                                    <span className="badge mr-3 badge-primary badge-pill">5</span>
                                    Property Agency
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-blog-body col-sm mt-4 pt-3">
                <div className="col-12" style={{ margin: "auto", color: "ïvory" }}>
                    <div className='bg-dark d-flex mt-4'>
                        <section className='service-blog-body-header col-11 mt-4  ml-2'>
                            <h2 style={{ fontWeight: "bolder", color: "ivory" }} className="service-blog-header-left-header text-capitalize mb-2">
                                Market Analysis & Site Acquisition
                            </h2>
                            <div style={{ width: "25%" }}>
                                <hr style={{ backgroundColor: "orange", height: "3px", }} />
                            </div>

                            <div className='service-blog-body-text'>
                                <p>
                                    Our market analysis teams evaluates existing gaps in the market enhancing market intelligence and informing concept development. Our in-depth marketability studies help us identify market opportunities and seize them with the aim of achieving the highest and best use.
                                </p>
                                <ul className="list-group list-group-flush k">
                                    <li className="list-group-item bg-dark" >
                                        <span className="badge mr-3 badge-primary badge-pill">1</span>
                                        We find land in strategic areas that are highly marketable
                                    </li>
                                    <li className="list-group-item bg-dark" >
                                        <span className="badge mr-3 badge-primary badge-pill">2</span>
                                        We investigates the land potential for development and improvements.
                                    </li>
                                    <li className="list-group-item bg-dark" >
                                        <span className="badge mr-3 badge-primary badge-pill">3</span>
                                        Land that matches our development criteria is temporarily reserved until formal due diligence can be completed.
                                    </li>
                                    <li className="list-group-item bg-dark" >
                                        <span className="badge mr-3 badge-primary badge-pill">4</span>
                                        The development team creates one or more site plans that illustrate the actual use and layout of the property
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="service-blog-body col-sm mt-4 pt-3">
                <div className="col-12" style={{ margin: "auto", color: "#444" }}>
                    <div className='bg-light d-flex'>
                        <section className='service-blog-body-header col-11 mt-2 pt-2 ml-2'>
                            <h2 style={{ fontWeight: "bolder" }} className="service-blog-header-left-header text-capitalize mb-2">
                                PROPERTY APPRAISAL & VALUATION
                            </h2>
                            <div style={{ width: "25%" }}>
                                <hr style={{ backgroundColor: "orange", height: "3px", }} />
                            </div>

                            <div className='service-blog-body-text'>
                                <p>
                                    Our market analysis teams evaluates existing gaps in the market enhancing market intelligence and informing concept development. Our in-depth marketability studies help us identify market opportunities and seize them with the aim of achieving the highest and best use.                                </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">1</span>
                                        We find land in strategic areas that are highly marketable
                                    </li>
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">2</span>
                                        We investigates the land potential for development and improvements.
                                    </li>
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">3</span>
                                        Land that matches our development criteria is temporarily reserved until formal due diligence can be completed.
                                    </li>
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">4</span>
                                        The development team creates one or more site plans that illustrate the actual use and layout of the property
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="col-12" style={{ margin: "auto", width: "97%", color: "ïvory" }}>
                <div className='bg-dark d-flex mt-4'>
                    <section className='service-blog-body-header col-11 mt-4  ml-2'>
                        <h2 style={{ fontWeight: "bolder", color: "ivory" }} className="service-blog-header-left-header text-capitalize mb-2">
                            DEVELOPMENT CONSULTANCY & ADVISORY
                        </h2>
                        <div style={{ width: "25%" }}>
                            <hr style={{ backgroundColor: "orange", height: "3px", }} />
                        </div>

                        <div className='service-blog-body-text'>
                            <p>
                                {company} has been involved in projects of tip-top standard and this experience enables us to provide independent and objective consultancy services to property owners, developers, builders, lenders and investors on all property-related aspects.

                                Our consultancy services cover a wide range of issues e.g. site locations, highest and best use, master planning and conceptualization. </p>
                            Our property advisory includes:
                            <ul className="list-group list-group-flush k">
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">1</span>
                                    Marketability Studies
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">2</span>
                                    Site Acquisition
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">3</span>
                                    Joint-venture & Finance Structuring
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">4</span>
                                    Property Appraisals & Valuations
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">5</span>
                                    Quality Control & Assurance
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <div className="service-blog-body col-sm mt-4 pt-3">
                <div className="col-12" style={{ margin: "auto", color: "#444" }}>
                    <div className='bg-light d-flex'>
                        <section className='service-blog-body-header col-11 mt-2 pt-2 ml-2'>
                            <h2 style={{ fontWeight: "bolder" }} className="service-blog-header-left-header text-capitalize mb-2">
                                PROPERTY MARKETING
                            </h2>
                            <div style={{ width: "25%" }}>
                                <hr style={{ backgroundColor: "orange", height: "3px", }} />
                            </div>

                            <div className='service-blog-body-text'>
                                <p>
                                    {company} teams makes property introductions in the market and maximize the visibility of your listing. By listening to the needs of both the buyers and sellers, we connect your prospects’ visions with the unique attributes of your property to find the best fit. Additionally, our specialized teams will ensure your property’s value is fully reflected in the ultimate result.
                                </p>
                                We specialize in the following property classes:
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">1</span>
                                        Residential Apartments
                                    </li>
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">2</span>
                                        Serviced Properties
                                    </li>
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">3</span>
                                        Investment Properties
                                    </li>
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">4</span>
                                        Land
                                    </li>
                                    <li className="list-group-item bg-light" style={{ color: "#444" }}>
                                        <span className="badge mr-3 badge-primary badge-pill">4</span>
                                        Commercial Property
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="col-12" style={{ margin: "auto", width: "97%", color: "ïvory" }}>
                <div className='bg-dark d-flex mt-4'>
                    <section className='service-blog-body-header col-11 mt-4  ml-2'>
                        <h2 style={{ fontWeight: "bolder", color: "ivory" }} className="service-blog-header-left-header text-capitalize mb-2">
                            PROPERTY MARKETING
                        </h2>
                        <div style={{ width: "25%" }}>
                            <hr style={{ backgroundColor: "orange", height: "3px", }} />
                        </div>

                        <div className='service-blog-body-text'>
                            <p>
                                We possess a vast database of clients providing our clients and partners with a useful resource to help them achieve their marketing goals. Our sales team are equipped with both inbound and outbound know-how crucial in advising customers to make smart investment decisions.
                                <br />{company} offers an array of marketing services for both residential and commercial property classes as follows: </p>
                            <ul className="list-group list-group-flush k">
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">1</span>
                                    Residential Apartments
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">2</span>
                                    Single-dwelling Units(Villas / Townhouses)

                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">3</span>
                                    Serviced Properties
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">4</span>
                                    Investment Properties
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">5</span>
                                    Land
                                </li>
                                <li className="list-group-item bg-dark" >
                                    <span className="badge mr-3 badge-primary badge-pill">5</span>
                                    Commercial Property
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

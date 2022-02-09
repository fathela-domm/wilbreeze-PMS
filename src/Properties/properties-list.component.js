import React from 'react'
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import CurrencyFormat from "react-currency-format"

export function PropertiesListComponent({ data }) {
    const [properties, setProperties] = React.useState([]);
    const counter = React.useRef(0);

    React.useLayoutEffect(() => {
        let dataArray = [];
        data.map((element, i) => {
            if (i < 1) {
                dataArray.push(element);
                counter.current += 1;
            }
        });
        setProperties(dataArray);
    }, [data]);
    const fetchMoreData = () => {
        // adds 1 more  record from the backend
        setTimeout(() => {
            let moreData = [];
            data.map((element, i) => {
                if (i < counter.current + 1 && i < data.length) {
                    moreData.push(element);
                    counter.current += 1;
                }
            });

            setProperties(moreData);
        }, 1500);
    };
    return (
        <InfiniteScroll
            style={{
                overflow: "hidden"
            }}
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={true}
            loader={properties.length < data.length ? <div className="circular-progress"><CircularProgress style={{ zoom: 2.3, "marginTop": "10px" }} /></div> : <></>}
        >
            {
                properties.length > 0 ? (properties.map(property => property.active == true || property.active == "true" && (
                    <div key={Math.random()} className="ad-listing-list mt-20 mb-2" style={{ background: "ivory" }}>
                        <div className="row p-lg-3 p-sm-5 p-4">
                            <div className="col-lg-5 align-self-center">
                                <Link className='row' to={"/properties/" + property.id}>
                                    <img src={property && property.images[2]} className="img-fluid" alt="property" />
                                </Link>
                            </div>
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-6 col-md-10">
                                        <div className="ad-listing-content">
                                            <div>
                                                <Link style={{ fontSize: "25px", fontWeight: "400" }} to={"/properties/" + property.id}>
                                                    {property.type}
                                                </Link>
                                            </div>
                                            <ul className="list-inline mt-2 mb-3">
                                                <li className="list-inline-item">
                                                    <Link style={{ fontSize: "20px", fontWeight: "400" }} to={"/properties/" + property.id}>
                                                        {property.name + " @"}
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to={"/properties/" + property.id}>
                                                        <p className='text-primary'>{property.location}</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <p className="pr-5">{property.overview}</p>
                                            <br />
                                            <div style={{ display: "flex", width: "100%", maxWidth: "max-content" }}>
                                                <CurrencyFormat className='text-danger' style={{ fontSize: "18px", fontWeight: "400" }} value={parseInt(property.minPrice)} displayType={'text'} thousandSeparator={true} prefix={'KSH: '} />
                                                <i className="text-danger pr-2 pl-2">{" - "}</i>
                                                <CurrencyFormat className='text-danger' style={{ fontSize: "18px", fontWeight: "400" }} value={parseInt(property.maxPrice)} displayType={'text'} thousandSeparator={true} prefix={'KSH: '} />
                                            </div>
                                            <br />
                                            <p className="pr-5">Phase: {property.phase}</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))) : (
                    <h3 className="text-primary text-center mt-4 text-sentence">No results...</h3>
                )
            }
        </InfiniteScroll>
    )
}

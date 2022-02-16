import React from 'react'
import Carousel from "react-material-ui-carousel";

export function CarouselComponent({ property }) {

    return (
        <div className='col-sm-12'>
            <Carousel duration={3000} style={{ width: "100%", height: "70vh" }}>
                {
                    property && property.images.map(img => {
                        return <img style={{ width: "100%", height: "80vh" }} src={img} alt="carousel-image" />
                    })
                }
            </Carousel>
        </div>
    )
}

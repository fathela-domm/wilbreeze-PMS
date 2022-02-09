import React from 'react'

export function BannerComponent(props) {

    return (
        <section className="page-banner-area page-about">
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-12 col-12 text-center">
                        <div className="page-banner-content">
                            <h1 className="display-4 font-weight-bold">Creative Real Estate agency</h1>
                            <p>We'd love to talk about how we can help you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React, { useEffect } from 'react';
import { AddsAreaComponent } from './adds-area.component';
import { BannerComponent } from './banner.component';
import { NavbarComponent } from "./navbar.component";
import { ServiceComponent } from './service.component';
import { ServiceCarouselComponent } from "./service-carousel.component";
import { ServiceStepsComponent } from './service-process.component';
import { ServicesTwoComponent } from './services-two.component';
import { ProjectWrapComponent } from './project-wrap.component';
import { TestimonialsComponent } from './testimonials.component';
import { Footer } from './footer';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

function HomeComponenent(props) {
    useEffect(() => { document.title = "Wilbreeze Investments Ltd" }, [])
    return (
        <>
            <ScrollToTopOnMount />
            {/* navbar component */}
            <NavbarComponent />
            {/* banner */}
            <BannerComponent />
            {/* selling the brand */}
            <AddsAreaComponent />
            {/* services  */}
            <ServiceComponent />
            <ServiceCarouselComponent />
            {/* process service */}
            <ServiceStepsComponent />
            <ServicesTwoComponent />
            {/* project wrap */}
            <ProjectWrapComponent />
            {/* testimonials */}
            <TestimonialsComponent />
            <Footer />
        </>
    )
}

export default HomeComponenent;

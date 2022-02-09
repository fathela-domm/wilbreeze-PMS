import React, { useEffect } from 'react'
import { NavbarComponent } from "./navbar.component";
import { BannerComponent } from "./banner.component";
import { ServiceComponent } from '../Home/service.component';
import { ServiceCarouselComponent } from '../Home/service-carousel.component';
import { ServiceStepsComponent } from '../Home/service-process.component';
import { ServicesTwoComponent } from '../Home/services-two.component';
import { ProjectWrapComponent } from '../Home/project-wrap.component';
import { Footer } from '../Home/footer';
import { BlogComponent } from "./blog.component";

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export function ServicesComponent(props) {
    return (
        <>
            <ScrollToTopOnMount />
            <NavbarComponent />
            <BannerComponent />
            <BlogComponent />
            <ServiceComponent />
            <ServiceCarouselComponent />
            <ServiceStepsComponent />
            <ServicesTwoComponent />
            <ProjectWrapComponent />
            <Footer />
        </>
    )
}

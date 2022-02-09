import React, { useEffect } from 'react'
import { Footer } from '../Home/footer'
import { ServiceStepsComponent } from '../Home/service-process.component'
import { TestimonialsComponent } from '../Home/testimonials.component'
import { BannerComponent } from './banner.component'
import { NavbarComponent } from './navbar.component'
import { ProjectWrapComponent } from './project-wrap.component'
import { ServicesComponent } from "./services.component";
import { VisionMissionComponent } from './vision-mission.component'

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export function AboutComponent(props) {
    return (
        <>
            <ScrollToTopOnMount />
            <NavbarComponent />
            <BannerComponent />
            <ServiceStepsComponent />
            <ProjectWrapComponent />
            <ServicesComponent />
            <TestimonialsComponent />
            <VisionMissionComponent />
            <Footer />
        </>
    )
}

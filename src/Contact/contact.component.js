import React, { useEffect } from 'react'
import { Footer } from '../Home/footer'
import { TestimonialsComponent } from '../Home/testimonials.component'
import { BannerComponent } from './banner.component'
import { NavbarComponent } from './navbar.component'
import { ContactInfoComponent } from "./contact-info.component"

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export function ContactComponent(props) {
    return (
        <>
            <ScrollToTopOnMount />
            <NavbarComponent />
            <BannerComponent />
            <ContactInfoComponent />
            <TestimonialsComponent />
            <Footer />
        </>
    )
}

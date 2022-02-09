import React from "react";
import { AboutComponent } from "./About/about.component";
import { ContactComponent } from "./Contact/contact.component";
import HomeComponent from "./Home/home.componenent";
import { PropertyComponent } from "./Properties/property.component";
import { ServicesComponent } from "./Services/services.component";
import { LoginComponent } from "./Auth/login.component";
import ThemeConfig from './Admin/theme';
import GlobalStyles from './Admin/theme/globalStyles';
import ScrollToTop from './Admin/components/ScrollToTop';
import { BaseOptionChartStyle } from './Admin/components/charts/BaseOptionChart';
import { getItem } from "./Backend/local-storage-service.module";
import { Navigate } from "react-router-dom";
import { SinglePropertyComponent } from "./SingleProperty/single-property.component";

const user = getItem("user");

export let routes = [
    {
        path: "",
        element: <HomeComponent />,
    }, {
        path: "about",
        element: <AboutComponent />,
    }, {
        path: "contact",
        element: <ContactComponent />,
    }, {
        path: "services",
        element: <ServicesComponent />
    }, {
        path: "properties",
        element: <PropertyComponent />
    }, {
        path: "login",
        element: !user ? (
            <ThemeConfig>
                <ScrollToTop />
                <GlobalStyles />
                <BaseOptionChartStyle />
                <LoginComponent />
            </ThemeConfig>
        ) : <Navigate to="/" />
    }, {
        path: "properties/:propertyId",
        element: <SinglePropertyComponent />
    },
]

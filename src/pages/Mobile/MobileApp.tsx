import React from "react";
import HeaderMobile from "../../components/Mobile/HeaderMobile";
import LandingMobile from "./landingMobile";
import HotelMobile from "./Hotel";
import AcomodacoesMobile from "./AcomodacoesMobile";

const MobileApp:React.FC = () => {
    return (
        <>
            <HeaderMobile />
            <LandingMobile />
            <HotelMobile />
            <AcomodacoesMobile />
        </>
    )
}

export default MobileApp
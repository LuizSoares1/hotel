import React from "react";
import HeaderMobile from "../../components/Mobile/HeaderMobile";
import LandingMobile from "./landingMobile";
import HotelMobile from "./Hotel";

const MobileApp:React.FC = () => {
    return (
        <>
            <HeaderMobile />
            <LandingMobile />
            <HotelMobile />
        </>
    )
}

export default MobileApp
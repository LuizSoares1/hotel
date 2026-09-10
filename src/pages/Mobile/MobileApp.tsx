import React from "react";
import HeaderMobile from "../../components/Mobile/HeaderMobile";
import LandingMobile from "./landingMobile";
import HotelMobile from "./Hotel";
import AcomodacoesMobile from "./AcomodacoesMobile";
import ServicosMobile from "./ServicesMobile"
import CafeDaManhaMobile from "./breakfastMobile";
import PetFriendlyMobile from "./petFriendlyMobile";
import FaleConoscoMobile from "./talkWithUsMobile";
import FooterMobile from "../../components/Mobile/FooterMobile";

const MobileApp:React.FC = () => {
    return (
        <>
            <HeaderMobile />
            <LandingMobile />
            <HotelMobile />
            <AcomodacoesMobile />
            <ServicosMobile />
            <CafeDaManhaMobile />
            <PetFriendlyMobile />
            <FaleConoscoMobile />
            <FooterMobile />

        </>
    )
}

export default MobileApp
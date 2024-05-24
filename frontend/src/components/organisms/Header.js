import React from "react";

import '../../styles/organisms/Header.css'
import ClickableText from "../atoms/ClickableText";
import PhoneNumber from "../atoms/PhoneNumber";

const Header = () =>
{
    const companyName = "KRUCYB";
    const offersButton = "Oferty";
    const entertainersButton = "Lista atrakcji";
    const bargainsButton = "Promocje";
    const addOfferButton = "Dodaj ofertę";
    const phoneNumber = "123 456 789";

    return(
        <div className="Header">
            <p className="companyName">{companyName}</p>
            <ClickableText value={offersButton}/>
            <ClickableText value={bargainsButton}/>
            <ClickableText value={entertainersButton}/>
            <PhoneNumber value={phoneNumber}/>
        </div>
    );
}

export default Header;

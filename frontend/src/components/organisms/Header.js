import React from "react";

import '../../styles/organisms/Header.css'
import ClickableText from "../atoms/ClickableText";

const Header = () =>
{
    const companyName = "KRUCYB";
    const offersButton = "Oferty";
    const entertainersButton = "Lista atrakcji";
    const bargainsButton = "Promocje";
    const addOfferButton = "Dodaj ofertę";

    return(
        <div className="Header">
            <p className="companyName">{companyName}</p>
            <ClickableText value={offersButton}/>
            <ClickableText value={bargainsButton}/>
            <ClickableText value={entertainersButton}/>
        </div>
    );
}

export default Header;

import React from "react";

import '../../styles/organisms/Header.css'
import ClickableText from "../atoms/ClickableText";
import PhoneNumber from "../atoms/PhoneNumber";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const companyName = "KRUCYB";
    const offersButton = "Oferty";
    const entertainersButton = "Lista atrakcji";
    const bargainsButton = "Promocje";
    const addOfferButton = "Dodaj ofertę";
    const phoneNumber = "123 456 789";
    const navigate = useNavigate();

    const redirectToMainPage = () => {
        navigate('/');
    }
    const redirectToOffersPage = () => {
        navigate('/offers');
    }

    return (
        <div className="Header">
            <p className="companyName" onClick={() => redirectToMainPage()}>{companyName}</p>
            <ClickableText value={offersButton} onClick={() => redirectToOffersPage()}/>
            <ClickableText value={bargainsButton}/>
            <ClickableText value={entertainersButton}/>
            <PhoneNumber value={phoneNumber}/>
        </div>
    );
}

export default Header;

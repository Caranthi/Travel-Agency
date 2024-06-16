import React from "react";

import '../../styles/organisms/Header.css'
import ClickableText from "../atoms/ClickableText";
import PhoneNumber from "../atoms/PhoneNumber";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const companyName = "KRUCYB";
    const offersButton = "Oferty";
    const logInButton = "Zaloguj się";
    const signOutButton = "Wyloguj się";
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
    const redirectToLoginPage = () => {
        navigate('/login');
    }
    const redirectToBargainsPage = () => {
        navigate('/bargains');
    };
    const redirectToAddPage = () => {
        navigate('/add');
    };
    const signOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="Header">
            <p className="companyName" onClick={() => redirectToMainPage()}>{companyName}</p>
            <ClickableText value={offersButton} onClick={() => redirectToOffersPage()}/>
            <ClickableText value={bargainsButton} onClick={redirectToBargainsPage}/>
            {
                localStorage.getItem('user') ? (<ClickableText value={signOutButton} onClick={signOut}/>)
                    : (<ClickableText value={logInButton} onClick={redirectToLoginPage}/>)
            }
            {
                localStorage.getItem('user') && localStorage.getItem('user').valueOf() === 'admin' ? (
                        <ClickableText value={addOfferButton} onClick={redirectToAddPage}/>)
                    : (<div/>)
            }
            <PhoneNumber value={phoneNumber}/>
        </div>
    );
}

export default Header;

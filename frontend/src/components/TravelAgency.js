import React from "react";
import '../styles/TravelAgency.css';

import Header from "./organisms/Header";
import BrowserSection from "./organisms/BrowserSection";
import Offer from "./organisms/Offer";

const TravelAgency = () => {
    return (
        <div className="TravelAgency">
            <Header/>
            <BrowserSection/>
            <p className="sectionTitle">Oferta dla Ciebie!</p>
            <Offer title="Akacje pod gruszą (Polska, Zgierz)"/>
        </div>
    );
}

export default TravelAgency;

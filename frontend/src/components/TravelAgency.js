import React from "react";
import '../styles/TravelAgency.css';

import Header from "./organisms/Header";
import BrowserSection from "./organisms/BrowserSection";

const TravelAgency = () => {
    return (
        <div className="TravelAgency">
            <Header/>
            <BrowserSection/>
        </div>
    );
}

export default TravelAgency;

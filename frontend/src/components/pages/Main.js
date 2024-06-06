import React from "react";
import Header from "../organisms/Header";
import BrowserSection from "../organisms/BrowserSection";
import OfferPreview from "../organisms/OfferPreview";

import '../../styles/pages/Main.css';

const Main = () => {
    const mockOfferTitle1 = "Akacje pod gruszą (Polska, Zgierz)";
    const mockOfferTitle2 = "Sprzedam opla (Polska, Radom)";
    const mockOfferDeparture1 = "Warszawa";
    const mockOfferDeparture2 = "Łódź";
    const mockOfferPrice1 = "1500zł";
    const mockOfferPrice2 = "2000zł";
    const mockOfferTransport1 = "Plane";
    const mockOfferTransport2 = "Ship";

    return (
        <div className="Main">
            <Header/>
            <BrowserSection/>
            <p className="sectionTitle">Oferta dla Ciebie!</p>
            <OfferPreview title={mockOfferTitle1} departure={mockOfferDeparture1} price={mockOfferPrice1} transport={mockOfferTransport1}/>
        </div>
    );
}

export default Main;

import React, {useEffect, useState} from "react";
import OfferPreview from "../organisms/OfferPreview";
import Header from "../organisms/Header";

import '../../styles/pages/Offers.css';
const Offers = () => {
    const mockOfferTitle1 = "Akacje pod gruszą (Polska, Zgierz)";
    const mockOfferTitle2 = "Sprzedam opla (Polska, Radom)";
    const mockOfferDeparture1 = "Warszawa";
    const mockOfferDeparture2 = "Łódź";
    const mockOfferPrice1 = "1500zł";
    const mockOfferPrice2 = "2000zł";
    const mockOfferTransport1 = "Plane";
    const mockOfferTransport2 = "Ship";

    let [offers, setOffers] = useState([]);

    const readOffers = () => {
        //TODO: id will be required
        setOffers([{title: mockOfferTitle1, departure: mockOfferDeparture1, price: mockOfferPrice1, transport: mockOfferTransport1},
            {title: mockOfferTitle2, departure: mockOfferDeparture2, price: mockOfferPrice2, transport: mockOfferTransport2}]);
    }

    useEffect(readOffers, []);

    return (
        <div className="Offers">
            <Header/>
            <p className="title">OFERTY</p>
            {offers.map((item, index) => (
                <OfferPreview title={item.title} departure={item.departure} price={item.price} transport={item.transport}/>))}
        </div>
    );
}

export default Offers;

import React, {useEffect, useState} from "react";
import OfferPreview from "../organisms/OfferPreview";
import Header from "../organisms/Header";

import '../../styles/pages/Offers.css';
import axios from "axios";

const Offers = () => {
    const BACKEND_ADDRESS = 'http://localhost:5027';

    let [offers, setOffers] = useState([]);

    const readOffers = () => {
        axios.get(BACKEND_ADDRESS + '/trips/getAll').then((response) => {
            setOffers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    useEffect(readOffers, []);

    return (
        <div className="Offers">
            <Header/>
            <p className="title">OFERTY</p>
            {offers.map((item, index) => (
                <OfferPreview id={item.id} title={item.title} departure={item.departure} price={item.price} transport={item.transport}/>))}
        </div>
    );
}

export default Offers;

import React, {useEffect, useState} from "react";
import OfferPreview from "../organisms/OfferPreview";
import Header from "../organisms/Header";

import '../../styles/pages/Offers.css';
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";

const Offers = () => {
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
                <OfferPreview id={item.id} title={item.title} location={item.location}
                              departure={item.departure} price={item.price} transport={item.transport}/>))}
        </div>
    );
}

export default Offers;

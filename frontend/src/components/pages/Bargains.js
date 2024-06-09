import React, {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";
import Header from "../organisms/Header";
import OfferPreview from "../organisms/OfferPreview";

import '../../styles/pages/Bargains.css';

const Bargains = () => {
    let [offers, setOffers] = useState([]);
    let [currentOffers, setCurrentOffers] = useState([]);

    const readOffers = () => {
        axios.get(BACKEND_ADDRESS + '/trips/getAll').then((response) => {
            setOffers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    const filterOffers = () => {
        let filteredOffers = offers.filter(offer => offer.bargain === true);
        setCurrentOffers(filteredOffers);
    }

    useEffect(readOffers, []);
    useEffect(filterOffers, [offers]);

    return (
        <div className="Bargains">
            <Header/>
            <p className="title">OFERTY Z PROMOCJAMI!</p>
            {currentOffers.map((item, index) => (
                <OfferPreview tripPreview={item}/>))}
        </div>
    );
}

export default Bargains;

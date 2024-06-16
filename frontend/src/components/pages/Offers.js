import React, {useEffect, useState} from "react";
import OfferPreview from "../organisms/OfferPreview";
import Header from "../organisms/Header";

import '../../styles/pages/Offers.css';
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";
import {useLocation} from "react-router-dom";

const Offers = () => {
    const page = useLocation();
    let {departure, location, price, transport} = page.state || {};
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
        let filteredOffers = offers;

        if (departure) {
            filteredOffers = filteredOffers.filter(offer => offer.departure.toUpperCase().includes(departure.toUpperCase()));
        }
        if (location) {
            filteredOffers = filteredOffers.filter(offer => offer.country.toUpperCase().includes(location.toUpperCase()));
        }
        if (price) {
            filteredOffers = filteredOffers.filter(offer => offer.price <= price);
        }
        if (transport) {
            filteredOffers = filteredOffers.filter(offer => offer.transport === transport);
        }

        setCurrentOffers(filteredOffers);
    }

    useEffect(readOffers, []);
    useEffect(filterOffers, [offers]);

    return (
        <div className="Offers">
            <Header/>
            <p className="title">OFERTY</p>
            {currentOffers.map((item, index) => (
                <OfferPreview tripPreview={item}/>))}
        </div>
    );
}

export default Offers;

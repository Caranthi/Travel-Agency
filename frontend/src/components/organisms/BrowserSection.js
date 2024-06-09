import React, {useEffect, useState} from "react";

import '../../styles/organisms/BrowserSection.css';
import Browser from "./Browser";
import ButtonPrimary from "../atoms/ButtonPrimary";
import {subscribe} from "../../events";
import {useNavigate} from "react-router-dom";

const BrowserSection = () => {
    const searchButtonText = "Szukaj";
    const navigate = useNavigate()
    const [departure, setDeparture] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState(2000);
    const [transport, setTransport] = useState('Plane');

    useEffect(() => {
        subscribe('filterDeparture', (data) => {
            setDeparture(data.detail);
        })
    });
    useEffect(() => {
        subscribe('filterLocation', (data) => {
            setLocation(data.detail);
        })
    });
    useEffect(() => {
        subscribe('filterPrice', (data) => {
            setPrice(data.detail);
        })
    });
    useEffect(() => {
        subscribe('filterTransport', (data) => {
            setTransport(data.detail);
        })
    });

    const search = () => {
        navigate("/offers", {state: {departure, location, price, transport}});
    };

    return (
        <div className="BrowserSection">
            <Browser/>
            <ButtonPrimary value={searchButtonText} onClick={search}/>
        </div>
    );
}

export default BrowserSection;

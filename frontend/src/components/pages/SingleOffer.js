import React, {useEffect, useState} from "react";

import '../../styles/pages/SingleOffer.css';
import Header from "../organisms/Header";
import ButtonPrimary from "../atoms/ButtonPrimary";
import {useLocation, useNavigate} from "react-router-dom";
import TextWithIcon from "../atoms/TextWithIcon";
import Bargain from "../atoms/Bargain";
import {faBus, faPerson, faPlane, faShip, faGlobe, faCity} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";

const SingleOffer = () => {
    const navigate = useNavigate();
    const page = useLocation();
    const reserveButtonText = 'Zarezerwuj już teraz!';
    const departureLabel = "Wyjazd";
    const priceLabel = "Cena za osobę (zł)";
    const bargainLabel = "PROMOCJA! Cena:";
    const countryLabel = "Państwo";
    const cityLabel = "Miasto";

    let [id, setId] = useState(page.state);
    let [offer, setOffer] = useState({});
    let [hotel, setHotel] = useState({});
    const getData = () => {
        axios.get(BACKEND_ADDRESS + `/trips/get/${id}`).then((response) => {
            setOffer(response.data);
            return response.data.hotel;
        }).then((hotelId) => {
            axios.get(BACKEND_ADDRESS + `/hotels/get/${hotelId}`).then((response) => {
                setHotel(response.data);
            }).catch((error) => {
                console.error(error);
            })
        }).catch((error) => {
            console.error(error);
        })
    }
    const goToPayment = () => {
        navigate('/payment');
    }
    const getIcon = () => {
        switch (offer.transport) {
            case 'Plane':
                return faPlane;
            case 'Bus':
                return faBus;
            case 'Ship':
                return faShip;
            default:
                return faPlane;
        }
    };
    const icon = getIcon();

    useEffect(getData, []);

    return (
        <div className="SingleOffer">
            <Header/>
            <p className="offerHeader">{offer.title}</p>
            <div className="offerContainer">
                <div className="offerData">
                    <div className="imageContainer">
                        <div className="image"></div>
                        <p className="freePlaces">Wolne miejsca: 10</p>
                        <ButtonPrimary value={reserveButtonText} style={{height: '130px', width: '100%'}} onClick={goToPayment}/>
                    </div>
                    <div className="data">
                        <p className="offerDescription">{offer.description}</p>
                        <TextWithIcon value={offer.country} label={countryLabel} icon={faGlobe}/>
                        <TextWithIcon value={hotel.city} label={cityLabel} icon={faCity}/>
                        <TextWithIcon value={offer.departure} label={departureLabel} icon={icon}/>
                        {offer.bargain ? (<Bargain value={offer.price} label={bargainLabel} icon={faPerson}/>)
                            : (<TextWithIcon value={offer.price} label={priceLabel} icon={faPerson}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleOffer

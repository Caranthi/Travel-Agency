import React from "react";

import '../../styles/organisms/OfferPreview.css';
import ButtonPrimary from "../atoms/ButtonPrimary";
import TextWithIcon from "../atoms/TextWithIcon";

import {faPlane, faPerson, faBus, faShip} from "@fortawesome/free-solid-svg-icons";
import Bargain from "../atoms/Bargain";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";
import {publish} from "../../events";

const OfferPreview = ({tripPreview}) => {
    const buttonText = "Zobacz szczegóły";
    const deleteText = "USUŃ";
    const departureLabel = "Wyjazd";
    const priceLabel = "Cena za osobę (zł)";
    const bargainLabel = "PROMOCJA! Cena:";
    const navigate = useNavigate();

    const getIcon = () => {
        switch (tripPreview.transport) {
            case 'Plane':
                return faPlane;
            case 'Bus':
                return faBus;
            case 'Ship':
                return faShip;
            default:
                return faPlane;
        }
    }
    const goOfferPage = () => {
        navigate('/offer', {state: tripPreview.id});
    }
    const deleteOffer = () => {
        axios.delete(BACKEND_ADDRESS + `/trips/${tripPreview.id}`).then((response) => {
            publish('error', 'UDAŁO SIĘ USUNĄĆ OFERTĘ');
        }).catch(error => {
            console.error(error);
        })
    }

    const icon = getIcon();

    return (
        <div className="OfferPreview">
            <div className="titleAndImage">
                <span className="offerSpan">
                    <p className="offerTitle">{tripPreview.title}</p>
                    <p className="offerLocation">- {tripPreview.country}</p>
                </span>
                <div className="offerImage"/>
            </div>
            <div className="priceAndButton">
                <TextWithIcon value={tripPreview.departure} label={departureLabel} icon={icon}/>
                {tripPreview.bargain ? (<Bargain value={tripPreview.price} label={bargainLabel} icon={faPerson}/>)
                    : (<TextWithIcon value={tripPreview.price} label={priceLabel} icon={faPerson}/>)
                }
                {
                    localStorage.getItem('user') && localStorage.getItem('user').valueOf() === 'admin' ?
                        (<ButtonPrimary value={deleteText} style={{height: '85px', marginTop: '15%'}} onClick={deleteOffer}/>)
                        :
                        (<ButtonPrimary value={buttonText} style={{height: '85px', marginTop: '15%'}} onClick={goOfferPage}/>)
                }
            </div>
        </div>
    );
}

export default OfferPreview;

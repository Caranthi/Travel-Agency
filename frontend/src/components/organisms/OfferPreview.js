import React from "react";

import '../../styles/organisms/OfferPreview.css';
import ButtonPrimary from "../atoms/ButtonPrimary";
import TextWithIcon from "../atoms/TextWithIcon";

import {faPlane, faPerson, faBus, faShip} from "@fortawesome/free-solid-svg-icons";
import Bargain from "../atoms/Bargain";

const OfferPreview = ({tripPreview}) => {
    const reserveButtonText = "Zarezerwuj";
    const departureLabel = "Wyjazd";
    const priceLabel = "Cena za osobę (zł)";
    const bargainLabel = "PROMOCJA! Cena:";

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
    const icon = getIcon();

    return (
        <div className="OfferPreview">
            <div className="titleAndImage">
                <span className="offerSpan">
                    <p className="offerTitle">{tripPreview.title}</p>
                    <p className="offerLocation">{tripPreview.location}</p>
                </span>
                <div className="offerImage"/>
            </div>
            <div className="priceAndButton">
                <TextWithIcon value={tripPreview.departure} label={departureLabel} icon={icon}/>
                {tripPreview.bargain ? (<Bargain value={tripPreview.price} label={bargainLabel} icon={faPerson}/>)
                    : (<TextWithIcon value={tripPreview.price} label={priceLabel} icon={faPerson}/>)
                }
                <ButtonPrimary value={reserveButtonText} style={{height: '85px', marginTop: '15%'}}/>
            </div>
        </div>
    );
}

export default OfferPreview;

import React from "react";

import '../../styles/organisms/OfferPreview.css';
import ButtonPrimary from "../atoms/ButtonPrimary";
import TextWithIcon from "../atoms/TextWithIcon";

import {faPlane, faPerson, faBus, faShip} from "@fortawesome/free-solid-svg-icons";

const OfferPreview = ({id, title, location, departure, price, transport}) => {
    const reserveButtonText = "Zarezerwuj";
    const departureLabel = "Wyjazd";
    const priceLabel = "Cena za osobę";

    const getIcon = () => {
        switch (transport) {
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
                    <p className="offerTitle">{title}</p>
                    <p className="offerLocation">{location}</p>
                </span>
                <div className="offerImage"/>
            </div>
            <div className="priceAndButton">
                <TextWithIcon value={departure} label={departureLabel} icon={icon}/>
                <TextWithIcon value={price} label={priceLabel} icon={faPerson}/>
                <ButtonPrimary value={reserveButtonText} style={{height: '85px', marginTop: '15%'}}/>
            </div>
        </div>
    );
}

export default OfferPreview;

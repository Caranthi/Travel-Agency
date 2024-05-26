import React from "react";

import '../../styles/organisms/Offer.css';
import ButtonPrimary from "../atoms/ButtonPrimary";
import TextWithIcon from "../atoms/TextWithIcon";

import {faPlane, faPerson} from "@fortawesome/free-solid-svg-icons";

const Offer = ({title}) => {
    const reserveButtonText = "Zarezerwuj";
    const departureValue = "Warszawa";
    const departureLabel = "Wyjazd";
    const priceValue = "1500 zł";
    const priveLabel = "Cena za osobę";

    return (
        <div className="Offer">
            <div className="titleAndImage">
                <p className="offerTitle">{title}</p>
                <div className="offerImage"/>
            </div>
            <div className="priceAndButton">
                <TextWithIcon value={departureValue} label={departureLabel} icon={faPlane}/>
                <TextWithIcon value={priceValue} label={priveLabel} icon={faPerson}/>
                <ButtonPrimary value={reserveButtonText} style={{ height: '85px', marginTop: '15%'}}/>
            </div>
        </div>
    );
}

export default Offer;

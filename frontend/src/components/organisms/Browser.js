import React from "react";

import '../../styles/organisms/Browser.css'
import InputWithLabel from "../atoms/InputWithLabel";
import SeparatorLine from "../atoms/SeparatorLine";
import OptionWithLabel from "../atoms/OptionWithLabel";
import {publish} from "../../events";

const Browser = () => {
    const locationInputLabel = "Gdzie chciałbyś wyjechać?";
    const locationInputPlaceholder = "Gdziekolwiek";
    const departureInputLabel = "Skąd chciałbyś wyruszyć?";
    const departureInputPlaceholder = "Skądkolwiek";
    const priceInputLabel = "Do jakiej kwoty (zł)?";
    const priceInputPlaceholder = 2000;
    const transportInputLabel = "Środek transportu";
    const transportOptions = ['Samolot', 'Autokar', 'Statek'];

    const onDepartureInput = (e) => {
        publish('filterDeparture', e.target.value);
    };
    const onLocationInput = (e) => {
        publish('filterLocation', e.target.value);
    };
    const onPriceInput = (e) => {
        publish('filterPrice', e.target.value);
    };

    const onTransportChange = (e) => {
        let transport;
        switch (e.target.value) {
            case 'Samolot':
                transport = 'Plane';
                break;
            case 'Autokar':
                transport = 'Bus';
                break;
            case 'Statek':
                transport = 'Ship';
                break;
            default:
                transport = 'Plane';

        }
        publish('filterTransport', transport);
    };

    return (
        <div className="Browser">
            <InputWithLabel label={locationInputLabel} placeholder={locationInputPlaceholder} type="text" onInput={onLocationInput}/>
            <SeparatorLine/>
            <InputWithLabel label={departureInputLabel} placeholder={departureInputPlaceholder} type="text" onInput={onDepartureInput}/>
            <SeparatorLine/>
            <InputWithLabel label={priceInputLabel} placeholder={priceInputPlaceholder} type="number" onInput={onPriceInput}/>
            <SeparatorLine/>
            <OptionWithLabel label={transportInputLabel} options={transportOptions} onChange={onTransportChange}/>
        </div>
    );
}

export default Browser;

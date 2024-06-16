import React from "react";

import '../../styles/pages/AddOffer.css';
import Header from "../organisms/Header";
import InputWithLabel from "../atoms/InputWithLabel";
import OptionWithLabel from "../atoms/OptionWithLabel";
import ClickableText from "../atoms/ClickableText";
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";
import {publish} from "../../events";

const AddOffer = () => {
    const pageTitle = 'DODAJ NOWĄ OFERTĘ';
    const titleLabel = "Tytuł:";
    const descriptionLabel = "Opis:";
    const cityLabel = "Miasto:";
    const countryLabel = "Kraj:";
    const transportLabel = "Środek transportu:";
    const bargainLabel = "Promocja:";
    const priceLabel = "Cena za osobę dorosłą:";
    const childrenPriceLabel = "Cena za dziecko:";
    const departureLabel = "Wyjazd z:"
    const defaultPlaceholder = "...";
    const transportOptions = ['Samolot', 'Autokar', 'Statek'];
    const bargainOptions = ['NIE', 'TAK'];

    let offer = {
        title: '',
        city: '',
        country: '',
        departure: '',
        price: 0,
        transport: 'Plane',
        bargain: false,
        description: '',
        childrenPrice: 0,
        travelTime: 1.0
    }

    const onTitleChange = (e) => {
        offer.title = e.target.value;
    };
    const onCityChange = (e) => {
        offer.city = e.target.value;
    };
    const onCountryChange = (e) => {
        offer.country = e.target.value;
    };
    const onDepartureChange = (e) => {
        offer.departure = e.target.value;
    };
    const onPriceChange = (e) => {
        offer.price = e.target.value;
    };
    const onDescriptionChange = (e) => {
        offer.description = e.target.value;
    };
    const onChildrenPriceChange = (e) => {
        offer.childrenPrice = e.target.value;
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
        offer.transport = transport;
    };
    const onBargainChange = (e) => {
        let bargain;
        switch (e.target.value) {
            case 'TAK':
                bargain = true;
                break;
            case 'NIE':
                bargain = false;
                break;
            default:
                bargain = false;

        }
        offer.bargain = bargain;
    };
    const postOffer = () => {
        axios.post(BACKEND_ADDRESS + '/trips', offer, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
            publish('error', 'Udało się dodać ofertę!');
        }).catch(error => console.error(error));
    }

    return (
        <div className="AddOffer">
            <Header/>
            <ClickableText value={pageTitle} style={{marginRight: '23%', marginBottom: '0.5%'}} onClick={postOffer}/>
            <div className="inputPair">
                <InputWithLabel label={titleLabel} type="text" placeholder={defaultPlaceholder} onInput={onTitleChange}/>
                <InputWithLabel label={descriptionLabel} type="text" placeholder={defaultPlaceholder} onInput={onDescriptionChange}/>
            </div>
            <div className="inputPair">
                <InputWithLabel label={countryLabel} type="text" placeholder={defaultPlaceholder} onInput={onCountryChange}/>
                <InputWithLabel label={cityLabel} type="text" placeholder={defaultPlaceholder} onInput={onCityChange}/>
            </div>
            <div className="inputPair">
                <InputWithLabel label={priceLabel} type="number" placeholder="0" onInput={onPriceChange}/>
                <InputWithLabel label={childrenPriceLabel} type="number" placeholder="0" onInput={onChildrenPriceChange}/>
            </div>
            <div className="inputPair">
                <OptionWithLabel label={transportLabel} options={transportOptions} onChange={onTransportChange}/>
                <OptionWithLabel label={bargainLabel} options={bargainOptions} onChange={onBargainChange}/>
            </div>
            <div className="inputPair">
                <InputWithLabel label={departureLabel} type="text" placeholder={defaultPlaceholder} onInput={onDepartureChange}/>
            </div>
        </div>
    );
}

export default AddOffer

import React, {useEffect, useState} from "react";
import InputWithLabel from "../atoms/InputWithLabel";
import ButtonPrimary from "../atoms/ButtonPrimary";

import '../../styles/pages/Payment.css';
import {publish, subscribe} from "../../events";
import {useNavigate} from "react-router-dom";
import Header from "../organisms/Header";

const Payment = () => {
    const navigate = useNavigate();
    const paymentLabel = "Wpisz ten śmieszny 3 cyfrowy kod z tyłu twojej kart kredytowej :)";
    const paymentPlaceholder = "Wpisz kod...";
    const reserveButtonText = "Zarezerwuj";
    const inputLabel = "Dla ilu osób chcesz zarezerwować?";

    let [peopleToReserve, setPeopleToReserve] = useState(2);

    const reserve = () => {
        publish('error', 'Udało się zarezerwować ofertę!');
    }
    const changeDefaultPeopleNumber = (e) =>
    {
        setPeopleToReserve(e.target.value);
    }

    useEffect(() => {
        subscribe('redirect', () => {
            navigate('/');
        });
    });

    return (
        <div className="Payment">
            <Header/>
            <InputWithLabel label={inputLabel} type="number" placeholder="2" onInput={changeDefaultPeopleNumber}/>
            <InputWithLabel label={paymentLabel} placeholder={paymentPlaceholder} type="text"/>
            <ButtonPrimary value={reserveButtonText} onClick={reserve} style={{height: '85px', marginTop: '5%', marginRight: '5%'}}/>
        </div>
    );
}

export default Payment;

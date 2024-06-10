import React, {useEffect} from "react";
import InputWithLabel from "../atoms/InputWithLabel";
import ButtonPrimary from "../atoms/ButtonPrimary";

import '../../styles/pages/Payment.css';
import {publish, subscribe} from "../../events";
import {useNavigate} from "react-router-dom";

const Payment = () => {
    const paymentLabel = "Wpisz ten śmieszny 3 cyfrowy kod z tyłu twojej kart kredytowej :)";
    const paymentPlaceholder = "Wpisz kod...";
    const reserveButtonText = "Zarezerwuj";
    const navigate = useNavigate();
    const reserve = () => {
        publish('error', 'Udało się zarezerwować ofertę!');
    }


    useEffect(() => {
        subscribe('redirect', () => {
            navigate('/');
        });
    });

    return (
        <div className="Payment">
            <InputWithLabel label={paymentLabel} placeholder={paymentPlaceholder} type="text"/>
            <ButtonPrimary value={reserveButtonText} onClick={reserve} style={{height: '85px', marginTop: '5%', marginRight: '5%'}}/>
        </div>
    );
}

export default Payment;

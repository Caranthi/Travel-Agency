import React, {useEffect, useState} from "react";
import Header from "../organisms/Header";
import BrowserSection from "../organisms/BrowserSection";
import OfferPreview from "../organisms/OfferPreview";
import axios from 'axios';

import '../../styles/pages/Main.css';

const Main = () => {
    const BACKEND_ADDRESS = 'http://localhost:8080';

    let [recommendedOffer, setRecommenderOffer] = useState({});

    useEffect(() => {
        axios.get(BACKEND_ADDRESS + '/trips/get/1').then((response) => {
            console.log('RecommendedOffer: ', response.data);
            setRecommenderOffer(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className="Main">
            <Header/>
            <BrowserSection/>
            <p className="sectionTitle">Oferta dla Ciebie!</p>
            <OfferPreview id={recommendedOffer.id} title={recommendedOffer.title} departure={recommendedOffer.departure}
                          price={recommendedOffer.price}
                          transport={recommendedOffer.transport}/>
        </div>
    );
}

export default Main;

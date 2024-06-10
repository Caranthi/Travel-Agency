import React, {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";

import '../styles/TravelAgency.css';
import Main from "./pages/Main";
import Offers from "./pages/Offers";
import Bargains from "./pages/Bargains";
import Payment from "./pages/Payment";
import {subscribe} from "../events";
import ErrorForm from "./pages/ErrorForm";

const TravelAgency = () => {
    const [error, setError] = useState('');
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>
        },
        {
            path: "offers",
            element: <Offers/>
        },
        {
            path: "bargains",
            element: <Bargains/>
        },
        {
            path: "payment",
            element: <Payment/>
        },
    ])

    useEffect(() => {
        subscribe('error', (data) => {
            setError(data.detail);
        });
    });


    return (
        <div className="TravelAgency">
            <RouterProvider router={router}/>
            <ErrorForm error={error}/>
        </div>
    );
}

export default TravelAgency;

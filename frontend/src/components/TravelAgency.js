import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import '../styles/TravelAgency.css';
import Main from "./pages/Main";
import Offers from "./pages/Offers";
import Bargains from "./pages/Bargains";

const TravelAgency = () => {
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
    ])

    return (
        <div className="TravelAgency">
            <RouterProvider router={router}/>
        </div>
    );
}

export default TravelAgency;

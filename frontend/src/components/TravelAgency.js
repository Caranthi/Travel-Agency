import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import '../styles/TravelAgency.css';
import Main from "./pages/Main";
import Offers from "./pages/Offers";

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
    ])

    return (
        <div className="TravelAgency">
            <RouterProvider router={router}/>
        </div>
    );
}

export default TravelAgency;

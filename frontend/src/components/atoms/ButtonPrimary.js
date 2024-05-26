import React from "react";

import '../../styles/atoms/ButtonPrimary.css';
const ButtonPrimary = ({value, style}) => {

    return (
        <button className="ButtonPrimary" style={style}>{value}</button>
    );
}

export default ButtonPrimary;



import React from "react";

import '../../styles/atoms/ButtonPrimary.css';
const ButtonPrimary = ({value, style, onClick}) => {

    return (
        <button className="ButtonPrimary" style={style} onClick={onClick}>{value}</button>
    );
}

export default ButtonPrimary;



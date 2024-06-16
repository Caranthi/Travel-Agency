import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import '../../styles/atoms/TextWithIcon.css';

const Bargain = ({label, value, icon, style}) => {

    return (
        <div className="TextWithIcon">
            <p className="label">{label}</p>
            <div className="iconWithText">
                <FontAwesomeIcon icon={icon} className="icon"/>
                <p className="oldValue">{value}</p>
                <p className="newValue">{(value / 1.5).toFixed(1) + ' (zł)'}</p>
            </div>
        </div>
    );
}

export default Bargain;

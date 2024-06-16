import React from "react";

import '../../styles/atoms/TextWithIcon.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const TextWithIcon = ({label, value, icon, style}) =>
{

    return(
        <div className="TextWithIcon">
            <p className="label">{label}</p>
            <div className="iconWithText">
                <FontAwesomeIcon icon={icon} className="icon"/>
                <p className="value">{value}</p>
            </div>
        </div>
    );
}

export default TextWithIcon;

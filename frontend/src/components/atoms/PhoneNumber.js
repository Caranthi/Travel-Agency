import React from "react";

import '../../styles/atoms/PhoneNumber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const PhoneNumber = ({value}) =>
{
    return(
        <div className="PhoneNumber">
            <FontAwesomeIcon icon={faPhone} className="phone"/>
            <p className="number">{value}</p>
        </div>
    );
}

export default PhoneNumber;

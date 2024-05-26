import React from "react";

import '../../styles/atoms/InputWithLabel.css';

const InputWithLabel = ({label, placeholder, type}) => {

    return (
        <div className="InputWithLabel">
            <p className="label">{label}</p>
            <input className="input" type={type} placeholder={placeholder}/>
        </div>
    );
}

export default InputWithLabel;

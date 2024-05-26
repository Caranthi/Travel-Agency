import React from "react";

import '../../styles/atoms/OptionWithLabel.css';

const OptionWithLabel = ({label, options}) => {


    return (
        <div className="OptionWithLabel">
            <p className="label">{label}</p>
            <select className="options">
                {options.map((item, index) => (<option>
                    {options[index]}
                </option>))}
            </select>
        </div>
    );
}

export default OptionWithLabel;

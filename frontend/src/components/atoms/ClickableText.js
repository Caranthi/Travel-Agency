import React from "react";
import '../../styles/atoms/ClickableText.css';

const ClickableText = ({value, onClick}) => {

    return (
        <p className="ClickableText" onClick={onClick}>{value}</p>
    );
}

export default ClickableText;

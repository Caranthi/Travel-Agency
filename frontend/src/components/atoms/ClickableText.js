import React from "react";
import '../../styles/atoms/ClickableText.css';

const ClickableText = ({value, onClick, style}) => {

    return (
        <p className="ClickableText" onClick={onClick} style={style}>{value}</p>
    );
}

export default ClickableText;

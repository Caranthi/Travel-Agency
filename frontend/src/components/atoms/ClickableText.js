import React from "react";
import '../../styles/atoms/ClickableText.css';

const ClickableText = ({value}) => {

    return (
        <p className="ClickableText">{value}</p>
    );
}

export default ClickableText;

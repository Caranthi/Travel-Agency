import React from "react";
import '../../styles/atoms/ClickableText.css';

const ClickableText = (props) => {

    return (
        <p className="ClickableText">{props.value}</p>
    );
}

export default ClickableText;

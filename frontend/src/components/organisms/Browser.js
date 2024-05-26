import React from "react";

import '../../styles/organisms/Browser.css'
import InputWithLabel from "../atoms/InputWithLabel";
import SeparatorLine from "../atoms/SeparatorLine";
import OptionWithLabel from "../atoms/OptionWithLabel";

const Browser = () => {
    const placeInputLabel = "Gdzie chciałbyś wyjechać?";
    const placeInputPlaceholder = "Gdziekolwiek";
    const startInputLabel = "Skąd chciałbyś wyruszyć?";
    const startInputPlaceholder = "Skądkolwiek";
    const peopleInputLabel = "Ile osób?";
    const peopleInputPlaceholder = 2;
    const transportInputLabel = "Środek transportu";
    const transportOptions = ['Samolot', 'Autokar', 'Statek'];

    return (
        <div className="Browser">
            <InputWithLabel label={placeInputLabel} placeholder={placeInputPlaceholder} type="text"/>
            <SeparatorLine/>
            <InputWithLabel label={startInputLabel} placeholder={startInputPlaceholder} type="text"/>
            <SeparatorLine/>
            <InputWithLabel label={peopleInputLabel} placeholder={peopleInputPlaceholder} type="number"/>
            <SeparatorLine/>
            <OptionWithLabel label={transportInputLabel} options={transportOptions}/>
        </div>
    );
}

export default Browser;

import React from "react";

import '../../styles/organisms/BrowserSection.css';
import Browser from "./Browser";
import ButtonPrimary from "../atoms/ButtonPrimary";
const BrowserSection = () =>
{
    const searchButtonText = "Szukaj";

    return(
      <div className="BrowserSection">
          <Browser/>
          <ButtonPrimary value={searchButtonText}/>
      </div>
    );
}

export default BrowserSection;

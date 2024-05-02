import React from "react";
import Avarter from "../Avater/Avarter";
import Title from "../Title/Title";
import Info from "../Info/Info";
import CarBrands from "../CarBrands/CarBrands";

import "./CardComponent.css";

const CardProfile = () => {
    return(
        <div className="profileCard">
            <Avarter />
            <Title />
            <Info />
            <CarBrands />
        </div>
    )
}


export default CardProfile;
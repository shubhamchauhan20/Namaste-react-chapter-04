import React from "react";
import { imageCDN } from "../Constants";
import './index.css'

const RestrountCard = ( { name, cuisines, cloudinaryImageId, lastMileTravelString } ) => {
    return (
        <div className="card">
            <img src={imageCDN + cloudinaryImageId }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString} stars</h4>
        </div>
    )
}

export default RestrountCard;

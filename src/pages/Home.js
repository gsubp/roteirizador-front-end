import React from "react";
import Map from "../components/Map";
import "../styles/home.scss";

export default function Home() { 
    
    return (
        <div className="container">
            <div className="map-container">
                <Map/>
           </div>
        </div>
    );

}
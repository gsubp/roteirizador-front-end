import React, {useEffect, useState} from "react";
import Map from "../components/Map";
import SideBar from "../components/SideBar";
import "../styles/home.scss";

export default function Home() { 
    
    return (
        <div className="container">
            <SideBar />
            <div className="map-container">
                <Map/>
           </div>
        </div>
    );

}
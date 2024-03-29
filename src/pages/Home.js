import React from "react";
import Map from "../components/Map";
import MenuMobile from "../components/MenuMobile";
import UserDropdown from "../components/UserDropdown";
import "../styles/home.scss";

export default function Home() {    
    return (
        <div className="container">
            <div className="map-container">
                <Map/>
            </div>
            <UserDropdown />
            <MenuMobile/>
        </div>
    );

}
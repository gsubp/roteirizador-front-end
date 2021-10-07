import React, { useState } from "react";
import logoSVG from "../assets/logo.svg";
import "../styles/user-dropdown.scss";
import { FiArchive, FiChevronDown, FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UserTouch() {
    return (
        <div className="user-dropdown-container">
            <button className="user-dropdown-button">
                <img src={logoSVG} alt="Roteirizador" />
                <p className="text">Guilherme</p>
                <FiChevronDown size={24} color="#2b2d42"/>
            </button>
            <div className="user-dropdown-content">
                <Link to="/history">
                    Histórico
                    <FiArchive size={24} color="#2b2d42"/>
                </Link>
                <Link to="#">
                    Loggout
                    <FiPower size={24} color="#d90429"/>
                </Link>
            </div>
        </div>
    );

}
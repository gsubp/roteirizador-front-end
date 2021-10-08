import React from "react";
import { FiArchive, FiChevronDown, FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoSVG from "../assets/logo.svg";
import "../styles/user-dropdown.scss";

export default function UserTouch(props) {
    return (
        <div className="user-dropdown-container">
            <button className="user-dropdown-button">
                <img src={logoSVG} alt="Roteirizador" />
                <p className="text">{props.name}</p>
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
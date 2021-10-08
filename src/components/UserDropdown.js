import React, { useEffect, useState } from "react";
import { FiArchive, FiChevronDown, FiPower } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logoSVG from "../assets/logo.svg";
import api from "../services/api";
import "../styles/user-dropdown.scss";

export default function UserTouch() {
    const [nome, setNone] = useState("");
    const history = useHistory();

    useEffect(() => {
        console.log(nome)
        if (localStorage.getItem("id") === null)
            history.push("/login");
    });
    useEffect(() => {        
        async function fetchUser() {
            const user = await api.get(`users/${localStorage.getItem("id")}`)
            setNone(user.data[0].nome);
        }
        fetchUser();
    });

    return (
        <div className="user-dropdown-container">
            <button className="user-dropdown-button">
                <img src={logoSVG} alt="Roteirizador" />
                <p className="text">{nome}</p>
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
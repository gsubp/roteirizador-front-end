import React, { useEffect, useState } from "react";
import { FiArchive, FiChevronDown, FiPower } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logoSVG from "../assets/logo.svg";
import api from "../services/api";
import "../styles/user-dropdown.scss";

export default function UserTouch() {
    const [nome, setNone] = useState("");
    const history = useHistory();

    useEffect(() => {
    });
    useEffect(() => {        
        async function fetchUser() {
            const user = await api.get(`users/${localStorage.getItem("id")}`)
            setNone(user.data[0].nome);
        }
        if (localStorage.getItem("id") === null)
            history.push("/login");
        else
            fetchUser();
    });
    const handleLogoff = () => {
        localStorage.removeItem("id");
        history.push("/");
    }

    return (
        <div className="user-dropdown-container">
            <button className="user-dropdown-button">
                <img src={logoSVG} alt="Roteirizador" />
                <p className="text">{nome}</p>
                <FiChevronDown size={24} color="#2b2d428c"/>
            </button>
            <div className="user-dropdown-content">
                <Link to="/history">
                    <FiArchive size={24} color="#2b2d42"/>
                    <span>Histórico</span>
                </Link>
                <button onClick={handleLogoff}>
                    <FiPower size={24} color="#d90429"/>
                    <span>Sair</span>
                </button>
            </div>
        </div>
    );

}
import React from "react";
import "../styles/side-bar.scss";
import FormRoute from "./FormRoute";
import { FiArrowRight, FiMap } from "react-icons/fi";
export default function SideBar() { 
    return (
        <aside className="sidebar-container">
            <header className="sidebar-header">
                <div className="header-content">
                    <h1 className="tittle">Olá, Guilherme!</h1>
                    <p className="header-text text">Escolha sua rota.</p>
                </div>
            </header>
            <div className="divider" />
            <FormRoute/>
            <div className="divider" />
            <div className="route-content">
                <FiMap size={24} color="#2b2d42" />
                <ul className="route-text-content">
                    <li><b>Partida:</b> Av. João Kerhle</li>
                    <li><b>Destino:</b> Rua Vila Ferroviária</li>
                    <li><b>Distância:</b> 2,5 km</li>
                    <li><b>Duração:</b> 25 minutos</li>
                </ul>
            </div>
            <button className="button">
                Histórico
                <FiArrowRight size={24} color="#2B2D42"/>
            </button>
        </aside>
    );
}
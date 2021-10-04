import React from "react";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import "../styles/form-route.scss";

export default function FormRoute() { 
    return (
        <form action="" className="form-container">
            <div className="input-content">
                <FiMapPin size={24} color="#2b2d42" />
                <input type="text" name="home-input" id="home-input" placeholder="Escolha seu ponto de partida"/>
            </div>
            <div className="form-divider"/>
            <div className="form-divider"/>
            <div className="input-content">
                <FiMapPin size={24} color="#2b2d42" />
                <input type="text" name="dest-input" id="dest-input" placeholder="Escolha seu destino"/>
            </div>
            <button className="button">
                Criar Rota
                <FiArrowRight size={24} color="#2b2d42"/>
            </button>
        </form>
    );
}
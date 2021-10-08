import React from "react";
import { Link } from "react-router-dom";
import logoSVG from "../assets/logo.svg"
import LoginForm from "../components/LoginForm";
import "../styles/login.scss"
export default function Login() {
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="logo-content">
                    <img src={logoSVG} alt="Roteirizador" />
                    <p>Roteirizador</p>
                </div>
                <p>Seu novo trajeto começa agora!</p>
                <LoginForm />
                <div className="register-link-content">
                    Novo por aqui? <Link to="/register">Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
}
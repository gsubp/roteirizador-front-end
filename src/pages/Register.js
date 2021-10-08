import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import "../styles/register.scss";


export default function Regiter() {
    return (
        <div className="register-container">
            <div className="register-content">
                <div className="register-header-content">
                    <Link to="/login"><FiArrowLeft size={24} color="#2b2d42"/></Link>
                </div>
                    <h2>Cadastre-se</h2>
                    <RegisterForm/>
            </div>
        </div>
    );
}
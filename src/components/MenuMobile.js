import React from "react";
import { FiArchive, FiPower } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "../styles/menu-mobile.scss";

export default function MenuMobile() {
    const history = useHistory();
    const handleLogoff = () => {
        localStorage.removeItem("id");
        history.push("/");
    }
    return (
        <div className="mobile-content">
            <Link to="/history">
                <FiArchive size={24} color="#2b2d42" />
            </Link>
            <button onClick={handleLogoff}>
                <FiPower size={24} color="#d90429"/>
            </button>
        </div>
    );
}
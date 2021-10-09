import React, { useEffect, useState } from "react";
import { FiArchive, FiArrowLeft, FiCalendar } from "react-icons/fi";
import api from "../services/api";
import "../styles/history.scss";

export default function History() {
    const users_id = localStorage.getItem("id");
    const [data, setData] = useState({data: []});
    useEffect(() => {
        async function fetchData() { 
            const response = await api.get("history", {
                headers: {
                    Authorization: localStorage.getItem("id")
                }
            })
            setData(response)
        }
        fetchData();
    }, [users_id]);

    return (
        <div className="history-container">
            <div className="history-content">
                <div className="history-header-content">
                    <a href="/"><FiArrowLeft size={ 32 } color="#2b2d42"/></a>
                    <h1 className="tittle">Seu Histórico</h1>
                </div>
                <ul className="history-list-container">
                    {data.data.length !== 0 ?
                        data.data.map((item) => (
                            <li key={item.id} className="history-list-item">
                                <div className="date-content">
                                    <FiCalendar color="#2b2d4280"/>
                                    <p>{item.date}</p>
                                </div>
                                <p><b>Ponto de Parida:</b> {item.originLng} { item.originLat }</p>
                                <p><b>Destino:</b> {item.destLng} {item.destLat}</p>
                                <p><b>Distância:</b> { Intl.NumberFormat("double", {maximumFractionDigits: 1}).format(item.distancia) } km</p>
                                <p><b>Duração:</b> { Intl.NumberFormat("double", {maximumFractionDigits: 1}).format(item.duracao)  } minutos</p>
                            </li>
                        ))
                    :
                    <div className="empty-content">
                            <FiArchive size={64} color="#2b2d4280"/>
                        <p>Seu Histótico está vázio.</p>
                    </div>}

                </ul>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import "../styles/history.scss";
import HistoryListItem from "../components/HistoryListItem";

export default function History(props) {
    const [history, setHistory] = useState([{
        id: 0,
        origem: "Serra Talhada - PE",
        destino: "Recife - PE",
        distancia: "473 km",
        duracao: "4h 30min"
    }]);

    return (
        <div className="history-modal-container">
            <div className="history-modal-content">
                <div className="title-content">
                    <h1 className="tittle">Seu Histórico</h1>
                </div>
                <ul className="history-list-container">
                    {
                        history.map((item, index) => {
                            <HistoryListItem
                                key={item.id}
                                origem={item.origem}
                                destino={item.destino}
                                distancia={item.distancia}
                                duracao={item.duracao}
                            />
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
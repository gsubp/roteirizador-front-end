import React from "react";

export default function HistoryListItem(props) {
    return (
        <li className="history-list-item">
                <div className="item-text-content">
                    <p className="text"><b>Ponto de Partida:</b> {props.origem}</p>
                    <p className="text"><b>Destino:</b> {props.destino}</p>
                    <p className="text"><b>Distância:</b> {props.distancia}</p>
                    <p className="text"><b>Duração:</b> {props.duracao}</p>
                </div>
        </li>
    );
}
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useRef, useState } from 'react';
import api from '../services/api';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const directions = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(10);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom,
            });
        directions.current = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
            language: 'pt-br'

        });
        directions.current.on('route', async (response) => {
            let originLng = directions.current.getOrigin().geometry.coordinates[0];
            let originLat = directions.current.getOrigin().geometry.coordinates[1];
            let destLng = directions.current.getDestination().geometry.coordinates[0];
            let destLat = directions.current.getDestination().geometry.coordinates[1];
            let distancia = response.route[0].distance / 1000;
            let duracao = response.route[0].duration / 60;
            let today = new Date();
            let day = today.getDate();
            let month = today.getMonth() + 1;
            let year = today.getFullYear();
            let date = `${day}/${month}/${year}`;
            let users_id = localStorage.getItem("id");            
            let data = { originLng, originLat, destLng, destLat, distancia, duracao, date, users_id };
            await api.post("history", data)
                .then(response => { 
                    console.info(response.status)
                }).catch(error => {
                    console.error(error)   
                })
        }); 
        map.current.addControl(directions.current, 'top-left');
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize        
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });       
    });
    
    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
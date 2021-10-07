import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import MapboxLanguage from '@mapbox/mapbox-gl-language';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const directions = useRef(null);
    const language = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    
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
        directions.current.on('route', (e) => {
            alert("Fire")
            console.log(e)
            console.log(directions.current.getOrigin())
            console.log(directions.current.getDestination())
        }); 
        language.current = new MapboxLanguage({
            defaultLanguage: 'pt-br',
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
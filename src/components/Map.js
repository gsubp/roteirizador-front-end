import React, { useEffect, useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


export default function Map() { 
    const location = {
        lat: 0,
        lng: 0
    }
    navigator.geolocation.getCurrentPosition((position) => {
        location.lat = position.coords.latitude;
        location.lng = position.coords.longitude;
    });

    const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: location.lat, lng: location.lng }}
        >
      </GoogleMap>
    ))

    return <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOUHjjOeuaEb8aIp2punWar97hvnyRhDE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
}
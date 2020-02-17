import React from "react";
import MapWrapped from './components/Map'

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <h1>Meteorites Map</h1>
     
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          "AIzaSyBgQHHu_eIqnzpFReJWCkwIx5oeH0qOKGQ"
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}


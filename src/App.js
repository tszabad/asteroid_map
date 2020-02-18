import React from "react";
import MapWrapped from './components/Map'

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <div style={{display: "flex",justifyContent: "space-around", backgroundColor:"#1E90FF"}}>
      <h1 >Meteorites Map  </h1><img src="./meteorite.jpg" alt="Asteroid" height="70" width="70"></img>
      </div>
     
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}


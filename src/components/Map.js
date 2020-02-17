import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "../mapStyles";




function Map() {
    const [selectedMet, setSelectedMet] = useState(null);
    const [location, setLocation] = useState([]);
    const [isLoadning, setLoading] = useState(true);
                 
   
  
    useEffect(() => {
        
        fetch(
          "https://data.nasa.gov/resource/gh4g-9sfh.json"
        )
          .then(response => {
            return response.json();
          })
          .then(result => {
            setLocation(result)
            setLoading(false)
          })
          .catch(error => console.error(error));
       
          const listener = e => {
            if (e.key === "Escape") {
              setSelectedMet(null);
            }
          };
          window.addEventListener("keydown", listener);
          return () => {
            window.removeEventListener("keydown", listener);
          };                  
    }, []);
  
    console.log(location);
  
    return (
    
      
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 45.4211, lng: 10.6903 }}
        defaultOptions={{ styles: mapStyles }}
      >
        {!isLoadning && location.length && location.filter(item => Number(item.mass) >2500).map(item => (
          <Marker
            key={item.id}
            position={{
              lat: Number(item.geolocation.latitude),
              lng: Number(item.geolocation.longitude)
            }}
            onClick={() => {
              setSelectedMet(item);
            }} 
            icon={{
              url: `/asteroid.svg`,
              scaledSize: new window.google.maps.Size(Number(item.mass>1000000? 100 : item.mass/10000), Number(item.mass>1000000? 100 : item.mass/10000))
            }}
          />
        ))}
        {selectedMet && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedMet(null);
            }}
            position={{
              lat: Number(selectedMet.geolocation.latitude),
              lng: Number(selectedMet.geolocation.longitude)
            }}
          >
            <div>
              <h2>{selectedMet.name}</h2>
              <p>Mass: {selectedMet.mass}</p>
              <p>Year: {selectedMet.year.substr(0, 4)}</p>
            </div>
          </InfoWindow>
        )}
  
        
      </GoogleMap>
     
    );
  }
  
 const MapWrapped = withScriptjs(withGoogleMap(Map));
 export default MapWrapped;
import React, { useState } from 'react';
import mapStyles from './mapStyles';

import './map.css';
import {
    GoogleMap,
    withGoogleMap,
    InfoWindow,
    withScriptjs,
    Marker
} from "react-google-maps";

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from "../../utils/queries";
require("dotenv").config()

require('dotenv').config()

function Map() {
    const { loading, data } = useQuery(GET_PROJECTS);
    const projectData = data?.projects || [];
    console.log("PROJECTS", data?.projects);

    const [currentProject, setCurrentProject] = useState(null);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!projectData) {
        console.log("nothing pulled....")
        return <h2>LOADING...</h2>;
    }

    return (

        < GoogleMap
            defaultZoom={4.3}
            defaultCenter={{
                lat: 32.3182,
                lng: -86.90234
            }}
            defaultOptions={{ styles: mapStyles.styles }}
        >
            {projectData.map(item => (
                <Marker
                    key={item._id}
                    position={{
                        lat: item.location[0].latitude,
                        lng: item.location[0].longitude
                    }}
                    onClick={() => {
                        currentProject && setCurrentProject(null)
                        setCurrentProject(item);
                        console.log("data", item)
                    }}
                    defaultIcon={{
                        url: `https://drive.google.com/uc?id=11k7iv_DCI6TdiMbnPTjxNDh42JdMymzy`,
                        scaledSize: new window.google.maps.Size(35, 45)
                    }}

                />
            ))}
            {currentProject && (
                < InfoWindow
                    onCloseClick={() => {
                        setCurrentProject(null);
                    }}
                    position={{
                        lat: currentProject.location[0].latitude,
                        lng: currentProject.location[0].longitude
                    }}
                >
                    <div className="infoWindow">
                        <h5>{currentProject.projectName}</h5>
                        <p>{currentProject.description}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap >
    );
}

const MapWithAMakredInfoWindow = withScriptjs(withGoogleMap(Map));

export default function GoogleMapReact() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWithAMakredInfoWindow
                googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}


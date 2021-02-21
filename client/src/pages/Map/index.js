import React, { useState } from 'react';
import mapStyles from './mapStyles';
import {
    GoogleMap,
    withGoogleMap,
    InfoWindow,
    withScriptjs,
    Marker
} from "react-google-maps";

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from "../../utils/queries";

function MapG() {
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
            defaultZoom={5}
            defaultCenter={{
                lat: 44.8714,
                lng: -90.2434
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
                        setCurrentProject(item);
                        console.log("data", item)
                    }}
                // icon={{
                //     url: `WoodlandConsulting_logo_sm_nog.png`,
                //     scaledSize: new window.google.maps.Size(20, 20)
                // }}

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
                    <div>
                        <h4>{currentProject.projectName}</h4>
                        <p>{currentProject.description}</p>
                    </div>

                </InfoWindow>
            )}
        </GoogleMap >
    );
}

const MapWithAMakredInfoWindow = withScriptjs(withGoogleMap(MapG));

export default function Map() {
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


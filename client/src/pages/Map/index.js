import React, { useState } from 'react';
import mapStyles from './mapStyles';

import { useQuery } from '@apollo/react-hooks';
import Project from '../../components/Project';
import { GET_PROJECTS } from '../../utils/queries';

import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    Marker,
    InfoWindow
} from "react-google-maps";

function MapG() {

    const { loading, projectData } = useQuery(GET_PROJECTS);
    const project = projectData?.projects || [];
    const [selectedProject, setSelectedProject] = useState(null);
    return (

        // <div>
        <div>{loading ? <div>Loading...</div> : <Project projects={project} />}

            <GoogleMap
                defaultZoom={4}
                defaultCenter={{
                    lat: 44.8714,
                    lng: -90.2434
                }}
                defaultOptions={{ styles: mapStyles.styles }}>
                <Marker
                    key={project._id}
                    location={{
                        // lat: 44.871443,
                        // lng: -90.243436
                        lat: project.latitude,
                        lng: project.longitute
                    }}
                    onClick={() => {
                        setSelectedProject(project);
                    }}
                />
                {selectedProject && (
                    <InfoWindow
                        onCloseClick={() => { setSelectedProject(null); }}
                        location={{
                            // lat: 44.871443,
                            // lng: -90.243436
                            lat: project.latitude,
                            lng: project.longitute
                        }}
                    // position={{
                    //     location: projects.locations
                    // lat: 44.871443,
                    // lng: -90.243436
                    // }}
                    // position={{
                    //     lat: projects.location.latitude,
                    //     lng: projects.location.longitude
                    // }}
                    >
                        <div>
                            {project.projectName}
                            {project.description}
                        </div>

                    </InfoWindow>

                )}
                {/* // </div> */}
            </GoogleMap>
        </div>
    );
}
const MapWrapped = withScriptjs(withGoogleMap(MapG));


export default function Map() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            >
                <Project />
            </MapWrapped>
        </div>
    );
}


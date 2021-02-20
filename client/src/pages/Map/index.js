import React, { useState } from 'react';
import mapStyles from './mapStyles';
import { useParams } from 'react-router-dom';
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

const MapG = props => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { project: projectParam } = useParams();

    const { loading, projectData } = useQuery(GET_PROJECTS, {
        variables: { project: projectParam }
    });
    console.log("params", projectParam)
    const projects = projectData?.projects || [];

    console.log("LIST", projects);

    return (

        // <div>
        <div>{loading ? <div>Loading...</div> : <Project project={projects} />}

            <GoogleMap
                defaultZoom={4}
                defaultCenter={{
                    lat: 44.8714,
                    lng: -90.2434
                }}
                defaultOptions={{ styles: mapStyles.styles }}>
                <Marker
                    key={projects._id}
                    location={{
                        // lat: 44.871443,
                        // lng: -90.243436
                        lat: projects.latitude,
                        lng: projects.longitute
                    }}
                    onClick={() => {
                        setSelectedProject(projects);
                    }}
                />
                {selectedProject && (
                    <InfoWindow
                        onCloseClick={() => { setSelectedProject(null); }}
                        location={{
                            // lat: 44.871443,
                            // lng: -90.243436
                            lat: projects.latitude,
                            lng: projects.longitute
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
                            {projects.projectName}
                            {projects.description}
                        </div>

                    </InfoWindow>

                )}
                {/* // </div> */}
            </GoogleMap>
        </div>
    )
};
const MapWrapped = withScriptjs(withGoogleMap(MapG));


export default function Map() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            {/* <Project /> */}

        </div>
    );
}


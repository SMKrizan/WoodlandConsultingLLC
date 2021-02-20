import React from 'react';
import mapStyles from './mapStyles';
import {
    GoogleMap,
    withGoogleMap,
    // InfoWindow,
    withScriptjs,
    Marker
} from "react-google-maps";

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from "../../utils/queries";

function MapG() {
    // const [selectedProject, setSelectedProject] = useState(null);
    const { loading, data } = useQuery(GET_PROJECTS);
    const projectData = data?.projects || [];
    console.log("PROJECTS", data?.projects);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!projectData) {
        console.log("nothing pulled....")
        return <h2>LOADING...</h2>;
    }
    return (

        < GoogleMap
            defaultZoom={4}
            defaultCenter={{
                lat: 44.8714,
                lng: -90.2434
            }}
            defaultOptions={{ styles: mapStyles.styles }}
        >
            {projectData.map(item => (
                <Marker
                    position={{
                        lat: item.location.[0].latitude,
                        lng: item.location.[0].longitude
                    }}
                    onClick={() => {
                        // setSelectedproject(projectName);
                    }}
                />
             ))}

            {/* < InfoWindow
            //     onCloseClick={() => {
            //         setSelectedproject(null);
            //     }}
            position={{
            //     location: projects.locations
            lat: 44.871443,
            lng: -90.243436
            }}
            // position={{
            //     lat: projects.location.latitude,
            //     lng: projects.location.longitude
            // }}
            >
            </InfoWindow> */}

        </GoogleMap >
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
            />
            {/* <ProjectList
            /> */}
        </div>
    );
}


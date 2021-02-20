import React from 'react';
import mapStyles from './mapStyles';
import ProjectList from '../../components/ProjectList';
import {
    GoogleMap,
    withGoogleMap,
    // InfoWindow,
    withScriptjs,
    Marker
} from "react-google-maps";

function MapG() {
    // const [selectedProject, setSelectedProject] = useState(null);
    return (
        <GoogleMap
            defaultZoom={4}
            defaultCenter={{
                lat: 44.8714,
                lng: -90.2434
            }}
            defaultOptions={{ styles: mapStyles.styles }}

        >
            <Marker
                // <ProjectList></ProjectList>
                // key={setSelectedProject._id}
                position={{
                    lat: 44.871443,
                    lng: -90.243436
                    // lat: latitude,
                    // lng: longitute
                }}
                onClick={() => {
                    // setSelectedproject(projectName);
                }}
            />
            {/* {/* {selectedProject 
            &&
             (
                 
               ```  */ // <InfoWindow
                //     onCloseClick={() => {
                //         setSelectedproject(null);
                //     }}
                //     location={{
                //         // lat: 44.871443,
                //         // lng: -90.243436
                //         lat: projects.latitude,
                //         lng: projects.longitute
                //     }}
                // position={{
                //     location: projects.locations
                // lat: 44.871443,
                // lng: -90.243436
                // }}
                // position={{
                //     lat: projects.location.latitude,
                //     lng: projects.location.longitude
                // }}
                // >
                // <div>
                //     {projects.projectName}
                //     {projects.description}
                // </div>

                // </InfoWindow>
                // ) */}
            }
        </GoogleMap>
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
            <ProjectList />
        </div>
    );
}


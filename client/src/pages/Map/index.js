import React from "react";
import Map from "../components/maps/RecycleCentersMap";
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export default class RecycleCenterssMapContainer extends React.Component {
    render() {
        return (
            <div className="map-container">
                <Map
                    recycleCenters={this.props.recycleCenters}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?   key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}













// import React, { useState, useEffect } from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
// //'google-maps-react';

// // import mapStyles from './mapStyles';
// import * as projects from './index.json';

// function Map() {
//     return (
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{
//                 lat: 44.871443,
//                 lng: -90.243436
//             }}>

//             {project_name.map((project) => (
//                 //map it over an array of projects
//                 <Marker
//                     key={project._id}
//                     position={{
//                         lat: project.location.latitude,
//                         lng: project.location.longitude
//                     }}
//                 />
//             ))}
//         </GoogleMap>
//     );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// export default function GMap() {
//     return (

//         <div style={{ width: `100vm`, height: `100` }}>
//             <MapWrapped
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}
//             `}
//                 loadingElement={<div style={{ height: "100%" }} />}
//                 containerElement={<div style={{ height: "100%" }} />}
//                 mapElement={<div style={{ height: "100%" }} />}
//             />
//         </div>

//     );
// }
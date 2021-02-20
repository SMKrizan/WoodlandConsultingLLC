
// import React, { useState } from 'react';
// import mapStyles from './mapStyles';
// import {
//     GoogleMap, Marker, withGoogleMap,
//     withScriptjs,
//     InfoWindow
// } from "react-google-maps";
// import * as projectData from "./skateboard-parks.json";

// function MapG() {
//     const [selectedProject, setSelectedProject] = useState(null);
//     return (
//         <GoogleMap
//             defaultZoom={4}
//             defaultCenter={{
//                 lat: 44.871443,
//                 lng: -90.243436
//             }}
//             defaultOptions={{ styles: mapStyles.styles }}
//         >
//             {projectData.features.map(project => (
//                 <Marker
//                     key={project.properties.PARK_ID}
//                     position={{
//                         lat: project.geometry.coordinates[1],
//                         lng: project.geometry.coordinates[0]
//                     }}
//                     onClick={() => {
//                         setSelectedProject(project);
//                     }}
//                 // icon={{
//                 //     url: `/logo.svg`,
//                 //     scaledSize: new window.google.maps.Size(25, 25)
//                 // }}
//                 />
//             ))}

//             {selectedProject && (
//                 <InfoWindow
//                     onCloseClick={() => { setSelectedProject(null); }}
//                     position={{
//                         lat: selectedProject.geometry.coordinates[1],
//                         lng: selectedProject.geometry.coordinates[0]
//                     }}
//                 // latitude={selectedProject.geometry.coordinates[1]}
//                 // longitude={selectedProject.geometry.coordinates[0]}
//                 >
//                     <div>
//                         <h1>{selectedProject.properties.NAME}</h1>
//                         {/* <p>{selectedProject.properties.DESCRIPTION}</p> */}
//                     </div>
//                 </InfoWindow>
//             )}
//         </ GoogleMap>
//     );
// }
// const MapWrapped = withScriptjs(withGoogleMap(MapG));

// export default function Map() {
//     return (
//         <div style={{ width: "100vw", height: "100vh" }}>
//             <MapWrapped
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `100%` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//             />
//         </div>
//     );
// }

// ************************************************
// import React from 'react';
// // import { GET_PROJECTS } from '../../utils/queries';
// // import { useQuery } from '@apollo/react-hooks';
// import mapStyles from './mapStyles';
// const { compose, withProps, withState, withHandlers } = require("recompose");
// const {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
//     InfoWindow,
// } = require("react-google-maps");

// const Map = compose(
//     withProps({
//         googleMapURL: `https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `100%` }} />,
//     }),
//     withState('zoom', 'onZoomChange', 8),
//     withState('selectedProject', 'setSelectedProject', null),
//     withHandlers(() => {
//         const refs = {
//             map: undefined,
//         }
//         return {
//             onMapMounted: () => ref => {
//                 refs.map = ref
//             },
//             onZoomChanged: ({ onZoomChange }) => () => {
//                 onZoomChange(refs.map.getZoom())
//             },
//             setSelectedProject: ({ setSelectedProject }) => () => {
//                 setSelectedProject(refs.projects.map())//map through the projects
//             }
//         }
//     }),
//     // withQuery(('loading', 'data', GET_PROJECTS)=> {
//     // const projects = data?.projects || [];
//     // )
//     // return displayProjects()
//     // },
//     withScriptjs,
//     withGoogleMap
// )(props =>
//     <GoogleMap
//         defaultCenter={{
//             lat: 44.871443,
//             lng: -90.243436
//         }}
//         zoom={props.zoom}
//         ref={props.onMapMounted}
//         onZoomChanged={props.onZoomChanged}
//         defaultOptions={{ styles: mapStyles.styles }}
//         // setSelectedProject={{ projects.setSelectedProject }}
//     //array of all projects, map through, each will call for 'project'
//     >
//         {/* {projects.map((project) => */}

//         <Marker
//             // key={project._id}
//             //position of each project on the map based on location
//             // position={{
//             //     lat: location.latitude,
//             //     lng: location.longitude
//             // }}
//             // default position
//             position={{
//                 lat: 44.871443,
//                 lng: -90.243436
//             }}
//             onClick={props.onToggleOpen}//setSelectedProject(project)
//         //LOGO MARKER
//         // icon={{
//         //     url: '/src/images/logo/WoodlandConsulting_logo_sm.png',
//         //     scaledSize: new window.google.maps.Size(20, 20),
//         // }}
//         >
//             {
//                 props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
//                     <div>
//                         {" "}
//           Controlled zoom: {props.zoom}
//                     </div>
//                 </InfoWindow>
//             }
//         </Marker>
//         {/* )} */}
//     </GoogleMap >
// );

// <Map />
// export default Map;


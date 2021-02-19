import React from 'react';
import mapStyles from './mapStyles';
const { compose, withProps, withState, withHandlers } = require("recompose");
// const FaAnchor = require("react-icons/lib/fa/anchor");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} = require("react-google-maps");
// const KEY = process.env.REACT_APP_API_KEY;
const Map = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_API_KEY}
        &v=3.exp&libraries=geometry,drawing,places
        `,

        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withState('zoom', 'onZoomChange', 8),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom())
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultCenter={{
            lat: 44.871443,
            lng: -90.243436
        }}
        zoom={props.zoom}
        ref={props.onMapMounted}
        onZoomChanged={props.onZoomChanged}
        defaultOptions={{ styles: mapStyles.styles }}
    >
        <Marker
            position={{
                lat: 44.871443,
                lng: -90.243436
            }}
            onClick={props.onToggleOpen}
        >
            <InfoWindow onCloseClick={props.onToggleOpen}>
                <div>
                    {/* <FaAnchor /> */}
                    {" "}
          Controlled zoom: {props.zoom}
                </div>
            </InfoWindow>
        </Marker>
    </GoogleMap >
);

<Map />
export default Map;

// SEEDS for quick referance
// [
//     {
//         "category": [
//             602194405e33936387
//         ],
//         "_id": 602194405e3393638,
//         "project_name": "G&E Credit Union",
//         "description": "New Facility Development",
//         "date": 2016,
//         "city": "Rock Island",
//         "state": "IL",
//         "location": {
//             "latitude": 41.5095,
//             "longitude": 90.5787
//         },
//         "__v": 0
//     },
//     {
//         "category": [
//             602194405e33936387
//         ],
//         "_id": 602194405e3393638,
//         "project_name": "Hughes Federal Credit Union",
//         "description": "New Facility Development",
//         "date": 2016,
//         "city": "Tuscan",
//         "state": "AZ",
//         "location": {
//             "latitude": 34.234512,
//             "longitude": -112.015342
//         },
//         "__v": 0
//     }
// ]

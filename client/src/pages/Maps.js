import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyles from './mapStyles';


class MapContainer extends Component {
    state = {
        // An array stored in state made up of 3 different objects.
        myMarkers: [

            { latitude: 40.710992, longitude: -74.008292 },
            { latitude: 40.792917, longitude: -73.969497 },
            { latitude: 40.710992, longitude: -74.008292 }]
    }
    //markers on the map
    displayMarkers = () => {
        return this.state.myMarkers.map((mark, index) => {
            return <Marker id={index} position={{
                lat: mark.latitude,
                lng: mark.longitude
            }}
                onClick={() => console.log("You clicked me!", { index })} />
        })
    }
    render() {
        return (
            <div style={{
                position: "relative",
                width: "50%",
                height: "1100px"
            }}
                className="map">
                <Map google={this.props.google}
                    zoom={13}
                    styles={mapStyles.styles}
                    initialCenter={{ lat: 40.7812, lng: -73.9665 }}
                    disableDefaultUI={true}>
                    {this.displayMarkers()}</Map>
            </div>
        );
    }
}
// export default MapContainer;

export default GoogleApiWrapper({// Higher-Order Component that provides a wrapper around Google APIs.
    apiKey: 'AIzaSyDNvRrMP54Urwsm3aQ1CznLiV9XHRcJRMo'
    // 'API KEY'
})(MapContainer)




// import React from "react";
// import { Link } from "react-router-dom";
// // import { useMutation } from '@apollo/react-hooks';

// function Map() {
//     return (
//         <dev>
//             <Link></Link>
//         </dev>
//     )
// }
// export default Map;
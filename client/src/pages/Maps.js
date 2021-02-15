import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import mapStyles from './mapStyles';
class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

        // An array stored in state made up of 3 different objects.
        myMarkers: [

            { latitude: 43.073929, longitude: -89.385239 },
            { latitude: 40.792917, longitude: -73.969497 },
            { latitude: 43.073929, longitude: -89.385239 }]
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
                width: "100%",
                height: "1100px"
            }}
                className="map">
                <Map google={this.props.google}
                    zoom={10}
                    // defaultCenter={{ lat: 44.871443, lng: -90.243436 }}
                    styles={mapStyles.styles}
                    initialCenter={{ lat: 44.871443, lng: -90.243436 }}
                    disableDefaultUI={true}>
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({// Higher-Order Component that provides a wrapper around Google APIs.
    apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)

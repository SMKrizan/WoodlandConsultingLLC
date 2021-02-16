import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import mapStyles from './mapStyles';
class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedProject: {}
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedProject: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render() {
        return (
            <div style={{
                position: "relative",
                width: "100%",
                height: "1100px"
            }}
                className="map">
                <Map google={this.props.google}
                    zoom={4}
                    styles={mapStyles.styles}
                    initialCenter={{ lat: 44.871443, lng: -90.243436 }}
                    disableDefaultUI={true}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={`$project_name`} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedProject.project_name}</h4>
                            <h4>My Project</h4>
                            <h5>completed in 2016</h5>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)

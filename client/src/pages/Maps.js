// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import mapStyles from './mapStyles';

// class MapContainer extends Component {
//     // state = {
//     //     showingInfoWindow: false,
//     //     activeMarker: {},
//     //     selectedProject: {},
//     //     mapCenter: { lat: 44.871443, lng: -90.243436 }
//     // }
//     // onMarkerClick = (props, marker, e) =>
//     //     this.setState({
//     //         selectedProject: props,
//     //         activeMarker: marker,
//     //         showingInfoWindow: true
//     //     });
//     // onClose = props => {
//     //     if (this.state.showingInfoWindow) {
//     //         this.setState({
//     //             showingInfoWindow: false,
//     //             activeMarker: null
//     //         })
//     //     }
//     // };
//     // render() {
//         return (
//             <div></div>
//         //     <div style={{
//         //         position: "mapCenter",
//         //         width: "80%",
//         //         height: "80%",
//         //     }}
//         //         className="map" >
//         //         <Map google={this.props.google}
//         //             zoom={5}
//         //             styles={mapStyles.styles}
//         //             initialCenter={{
//         //                 lat: this.state.mapCenter.lat,
//         //                 lng: this.state.mapCenter.lng
//         //             }}
//         //             disableDefaultUI={true}>
//         //             <Marker
//         //                 position={{
//         //                     lat: this.state.mapCenter.lat,
//         //                     lng: this.state.mapCenter.lng
//         //                 }}
//         //                 onClick={this.onMarkerClick}
//         //             // name={`$project_name`}
//         //             // icon={{
//         //             //     url: './WoodlandConsulting_logo_sm.png',
//         //             //     scaledSize: new window.google.maps.Size(20, 20),
//         //             // }}

//         //             />
//         //             <InfoWindow
//         //                 marker={this.state.activeMarker}
//         //                 visible={this.state.showingInfoWindow}
//         //                 onClose={this.onClose}
//         //             >
//         //                 <div
//         //                     style={{
//         //                         color: "black"
//         //                     }}>
//         //                     {/* <h4>{this.state.selectedProject.project_name}</h4> */}
//         //                     <h5>My Project</h5>
//         //                     <h6>completed in 2016</h6>
//         //                 </div>
//         //             </InfoWindow>
//         //         </Map>
//         //     </div >
//          );
//     //}
// }

// export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_API_KEY
// })(MapContainer)

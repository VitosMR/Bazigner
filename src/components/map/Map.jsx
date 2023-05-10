import React, { Component } from "react";
import {Map, GoogleApiWrapper } from "google-maps-react";
import './style.css'
class MapContainer extends Component {
  render() {
    return (
      <div className="carta">
      <Map 
        google={this.props.google}
        style={{width:"100%", height:"100%"}}
        zoom={18} 
        initialCenter={{lat:50.26141563199591, lng: 28.664646554974166}}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyANf7OFPgrwpWwnk40Tc1KX4FbHEYSlX-E"
})(MapContainer);


import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './MapCss.css';
import data from './data.json';
import Markers from './VenueMarkers';
//import MoreInfo from './MoreInfo.jsx'
import ReactLeafletSearch from "react-leaflet-search";
class Map1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 19.138250, lng: 77.320953 },
      zoom: 12,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (

      <Map style={{maxHeight:'100%',background:'cover',overflow:'scroll'}} center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
    <ReactLeafletSearch   position="topleft"
    height='40%' 
    inputPlaceholder="Search Here.."
    search={[]} 
    zoom={7} 
    showMarker={true}
    showPopup={false}
    openSearchOnLoad={true}
    closeResultsOnClick={true}
   providerOptions={{searchBounds: []}} 
    customProvider={undefined | {search: (searchString)=> {}}}  className="custom-style"/>
       
    
    <Markers venues={data.venues}/>
      </Map>
      
    );
  }
}

export default Map1;
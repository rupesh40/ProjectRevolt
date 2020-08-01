
import React, { Component } from 'react';
import { Map, TileLayer,Marker,Popup } from 'react-leaflet';
import './MapCss.css';
import data from './data.json';
import Markers from './VenueMarkers';
import Routing from './Routing'
import ReactLeafletSearch from "react-leaflet-search";
import { geolocated } from 'react-geolocated';
const defaultLong=77.320953
const defaultLat=19.138250

class Map1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //currentLocation: { lat: 19.138250, lng: 77.320953 },
      zoom: 12,
      isMapInit: false
    }
  }
  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };
  render() {
    const{ zoom } = this.state;
    const langitude=this.props.coords?this.props.coords.longitude  : defaultLong;
    const latitude=this.props.coords?this.props.coords.latitude : defaultLat;
    console.log(this.props.coords)
    
    return (

      <Map  ref={this.saveMap} center={[latitude,langitude]} zoom={zoom}>
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
    
    {this.state.isMapInit && <Routing map={this.map} />}
   
    <Markers venues={data.venues}/>
    {
      !this.props.coords?
      <div className='loading'>Loading</div> :
      <Marker position={[latitude,langitude]}>
      <Popup>You are here!</Popup>
      
      </Marker>
    }   
    </Map>
      
    );
  }
}
export default geolocated({
  positionOptions:{enableHighAccuracy:false},userDecisionTimeout:10000
})(Map1);
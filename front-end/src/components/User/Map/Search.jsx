import { Map, TileLayer, Marker, MapControl, Popup, ZoomControl, withLeaflet } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

export default class Search extends MapControl {

    createLeafletElement() {
      return GeoSearchControl({
        provider: new OpenStreetMapProvider(),
        style: 'bar',
        showMarker: true,
        searchLabel: 'search'
      });
    }
}

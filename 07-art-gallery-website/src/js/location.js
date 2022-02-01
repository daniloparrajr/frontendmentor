import "leaflet/dist/leaflet.css";
import '../scss/location.scss';
import customMarkerFile from '../images/icon-location.svg';

import L from "leaflet";
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow
});

const location = [14.11583, 120.96103];

const map = L.map('map', { zoomControl: false }).setView( location, 13);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

let markerIcon = 'data:image/svg+xml;base64,' + btoa(customMarkerFile);

const mapMarker = L.icon({
    iconUrl: customMarkerFile,
    iconSize: [66, 88], // size of the icon
    iconAnchor: [33, 88]
});

L.marker(location, {icon: mapMarker}).addTo(map);
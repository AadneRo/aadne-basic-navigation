import { MapContainer, TileLayer } from "react-leaflet";
import { OSLO_COORDINATES } from "./../../constants";
import "leaflet/dist/leaflet.css";
import { CurrentLocationMarker, TargetLocationMarker } from "./../";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[OSLO_COORDINATES.lat, OSLO_COORDINATES.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CurrentLocationMarker />
        <TargetLocationMarker />
        <WeatherWidget />
      </MapContainer>
    </div>
  );
};

export default Map;

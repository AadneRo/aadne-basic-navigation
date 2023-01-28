import { useState, useContext } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { LocationContext } from "../../providers/LocationProvider";
import { Coordinate } from "../../types";

const MOCK_LOCATION: Coordinate = {
  lat: 59.91672854792813,
  lng: 10.728928509526087
};

const CurrentLocationMarker = () => {
  const { setLocation } = useContext(LocationContext);
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click() {
      map.locate();
      setLocation(MOCK_LOCATION);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    }
  });

  if (!position) return null;

  return (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;

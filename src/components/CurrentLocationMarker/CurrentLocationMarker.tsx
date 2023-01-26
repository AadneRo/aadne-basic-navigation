import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const CurrentLocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  if (!position) return null;

  return (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;

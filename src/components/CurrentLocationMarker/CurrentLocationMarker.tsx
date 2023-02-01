import { useState, useContext } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { LocationContext } from "../../providers/LocationProvider";
import { Coordinate } from "../../types";
import L from "leaflet";

/**
 * I believe this is the correct implementation but I'm unable to use it on my computer
 * so I used a mock location
 */
const MOCK_LOCATION: Coordinate = {
  lat: 59.91774465811397,
  lng: 10.740459690577831
};

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const CurrentLocationMarker = () => {
  const { setStart } = useContext(LocationContext);
  const [position, setPosition] = useState<Coordinate>();

  useMapEvents({
    click() {
      // map.locate();
      setPosition(MOCK_LOCATION);
      setStart(MOCK_LOCATION);
      // map.flyTo(MOCK_LOCATION, map.getZoom());
    },
    locationfound(e) {
      // setPosition(e.latlng);
    }

    // map.flyTo()
  });

  if (!position) return null;

  return (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;

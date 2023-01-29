import { useState, useContext } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { LocationContext } from "../../providers/LocationProvider";
import { Coordinate } from "../../types";

const MOCK_LOCATION: Coordinate = {
  lat: 59.91672854792813,
  lng: 10.728928509526087
};

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
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;

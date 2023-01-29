import { useMapEvents, Polyline, Marker } from "react-leaflet";
import L from "leaflet";
import { useContext, useState } from "react";
import { LocationContext } from "../../providers/LocationProvider";
import { Coordinate } from "./../../types";
// import DirectionToMarker from "../DirectionToMarker/DirectionToMarker";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

function TargetLocationMarker() {
  // const {} = useContext(DestinationContext);

  const { coorddinatesPath, setEnd } = useContext(LocationContext);

  const [markerPosition, setMarkerPosistion] = useState<Coordinate>();

  useMapEvents({
    click: (e) => {
      const targetCoordinates = e.latlng;
      setMarkerPosistion(targetCoordinates);
      setEnd(targetCoordinates);
    }
  });

  console.log("coorddinatesPath", coorddinatesPath);
  console.log("markerPosition", markerPosition);

  const position = coorddinatesPath.map((value) => {
    return { lng: value[0], lat: value[1] };
  });

  const getMarker = () => {
    if (!markerPosition) return null;

    return <Marker position={markerPosition} icon={icon} />;
  };

  const getPolyLine = () => {
    if (coorddinatesPath.length === 0) return null;

    return <Polyline pathOptions={{ color: "blue" }} positions={position} />;
  };

  return (
    <div>
      {getMarker()}
      {getPolyLine()}
    </div>
  );
}

export default TargetLocationMarker;

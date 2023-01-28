import { useMapEvents, Polyline } from "react-leaflet";
import L from "leaflet";
import { useContext } from "react";

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

  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      L.marker([lat, lng], { icon }).addTo(map);
      // saveMarkers([lat, lng]);
    }
  });

  const array = [
    [59.920195662518516, 10.738449096679688],
    [59.923634425231874, 10.734844207763674],
    [0.92750260735079, 10.72540283203125]
  ];

  // useEffect(() => {
  //   axios
  //     .get
  //     // "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248aa20198d613e452da8a6a525cc975a55&start=8.681495,49.41461&end=8.687872,49.420318"
  //     //getDirectionMatrixEndpoint(start, end)
  //     ()
  //     .then((res) => {
  //       const data = res.data;
  //       setDirectionData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [start, end]);

  //Direction at features.geometry.coorddinates

  return (
    <div>
      <Polyline pathOptions={{ color: "lime" }} positions={array} />
    </div>
  );
}

export default TargetLocationMarker;

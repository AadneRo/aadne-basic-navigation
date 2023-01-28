import { Map, ActionSection } from "./components";
import LocationProvider from "./providers/LocationProvider";

import "leaflet/dist/leaflet.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LocationProvider>
        <Map />

        <ActionSection />
      </LocationProvider>
    </div>
  );
}

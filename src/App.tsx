import "leaflet/dist/leaflet.css";
import "./styles.css";

import { Map, ActionSection } from "./components";
import LocationProvider from "./providers/LocationProvider";

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

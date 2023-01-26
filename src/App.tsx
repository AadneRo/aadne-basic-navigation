import "./styles.css";
import { Map } from "./components";
import LocationProvider from "./providers/LocationProvider";

export default function App() {
  return (
    <div className="App">
      <LocationProvider>
        <Map />
      </LocationProvider>
    </div>
  );
}

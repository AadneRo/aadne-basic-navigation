import { createContext } from "react";

export const LocationContext = React.createContext({
  coordinates: [],
  setCoordinates: () => null,
});

interface Props {
  children: React.ReactNode;
}

const LocationProvider = ({ children }: Props) => {
  const [setCoordinates, coordinates] = useState<number[]>([
    OSLO_COORDINATES.Y,
    OSLO_COORDINATES.X,
  ]);

  const values: LocationContext = { coordinates, setCoordinates };

  return (
    <LocationContext.Provider value={...values}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;

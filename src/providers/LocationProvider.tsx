import React, { createContext, useEffect, useState } from "react";
import { Coordinate } from "./../types";
import axios from "axios";
import { getDirectionMatrixEndpoint } from "./../services";

export const LocationContext = createContext<{
  setStart: (newLocation: Coordinate) => null;
  setEnd: (newLocation: Coordinate) => null;
  data: unknown;
}>({
  setStart: (_: Coordinate) => null,
  setEnd: (_: Coordinate) => null,
  data: null
});

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [start, setStart] = useState<Coordinate | null>(null);
  const [end, setEnd] = useState<Coordinate | null>(null);
  const [responseData, setResponseData] = useState({});

  // "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248aa20198d613e452da8a6a525cc975a55&start=8.681495,49.41461&end=8.687872,49.420318"
  useEffect(() => {
    if (start !== null && end !== null) {
      axios
        .get(getDirectionMatrixEndpoint(start, end))
        .then((res) => {
          const data = res.data;
          setResponseData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [start, end]);

  const contextValues = {
    setStart,
    setEnd,
    responseData
  };

  return (
    <LocationContext.Provider value={contextValues}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;

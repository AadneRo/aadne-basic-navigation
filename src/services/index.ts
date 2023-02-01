import { Coordinate } from "../types";

// Unused
export function getWeatherForLocationEndpoint(location: Coordinate) {
  return `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${location.lat}%2C23&lon${location.lng}%2C8`;
}

const apiKey = ""; // API_KEY

export function getDirectionMatrixEndpoint(start: Coordinate, end: Coordinate) {
  // "https://api.openrouteservice.org/v2/directions/driving-car?api_key=&start=8.681495,49.41461&end=8.687872,49.420318"

  return `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`;
}

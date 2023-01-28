import { useContext, useEffect, useState } from "react";
import { LocationContext } from "./../../providers/LocationProvider";
import { WeatherWidgetContainer } from "./..";
import { getWeatherForLocationEndpoint } from "./../../services";
import axios from "axios";

function WeatherWidget() {
  const { location } = useContext(LocationContext);
  const [weatherData, setWeatherData] = useState({});

  // useEffect(() => {
  //   if (location.lat !== 0 && location.lng !== 0) {
  //     console.log(location);

  //   //   axios
  //   //     .get(getWeatherForLocationEndpoint(location))
  //   //     .then((res) => {
  //   //       const data = res.data;
  //   //       setWeatherData(data);
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error.message);
  //   //     });
  //   // }
  // }, [location]);

  console.log(weatherData);

  return (
    <div className="weather-widget-container">
      <p>Hello</p>
    </div>
  );
}

export default WeatherWidget;

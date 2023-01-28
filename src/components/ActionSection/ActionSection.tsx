import { WeatherWidget } from "./../";
import Button from "@mui/material/Button";
import { useState } from "react";

function ActionSection() {
  const [weatherHidden, setWeatherHidden] = useState(true);
  const [targetInputHidden, setTargetInputHidden] = useState(true);

  function getWeather() {
    if (weatherHidden) return null;

    return <WeatherWidget />;
  }

  return (
    <>
      <div className="action-section-container">
        <Button
          variant="outlined"
          onClick={() => setWeatherHidden(!weatherHidden)}
        >
          {weatherHidden ? "Weather" : "Hide"}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setTargetInputHidden(!targetInputHidden)}
        >
          {targetInputHidden ? "Add destination" : "Cancel"}
        </Button>
      </div>
      {getWeather()}
    </>
  );
}

export default ActionSection;

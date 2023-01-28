import React from "react";

function WeatherWidgetContainer({ children }: { children: React.ReactNode }) {
  return <div className="weather-widget-container">{children}</div>;
}

export default WeatherWidgetContainer;

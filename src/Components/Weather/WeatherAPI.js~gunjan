import React, { useState, useEffect } from "react";
import Weather from "./Weather";

function WeatherAPI({ currentLocation }) {
  const APIKEY = "37b1eb1c76d6e913acdfaf3ed82d0a12";
  const [weather, setWeather] = useState([]);
  const [city] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://ip-api.com/json/`)
        .then((res) => res.json())
        .then((response) => response);
      console.log(response.country);
      localStorage.setItem("Country", response.country);
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${response.city}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="weather">
      {weather.data !== undefined ? (
        <Weather data={weather.data} currentLocation={currentLocation} />
      ) : null}
    </div>
  );
}

export default WeatherAPI;

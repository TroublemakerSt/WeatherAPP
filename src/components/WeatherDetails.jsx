import React from 'react';

function WeatherDetails({ city, temperature, minTemp, maxTemp }) {
  return (
    <div className="weather-details">
      <div className="city">{city}</div>
      <div className="temperature">{temperature} &deg; C</div>
      <div className="min_max_temp">
        Min temp: {minTemp} – Max temp: {maxTemp}
      </div>
    </div>
  );
}

export default WeatherDetails;

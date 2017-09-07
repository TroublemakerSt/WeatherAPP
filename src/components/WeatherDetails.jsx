import React from 'react';

function WeatherDetails({ city, temperature, min_temp, max_temp }) {
  return (
    <div className="weather-details">
      <div className="city">{city}</div>
      <div className="temperature">{temperature} &deg; C</div>
      <div className="min_max_temp">
        Min temp: {min_temp} – Max temp: {max_temp}
      </div>
    </div>
  );
}

export default WeatherDetails;

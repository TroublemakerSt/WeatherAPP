import React from 'react';

function WeatherIcon({ time, weatherCode }) {
	const timeOfDay = (time > 6 && time < 19) ? 'day' : 'night';
	const className = `weather-icon wi wi-owm-${timeOfDay}-${weatherCode}`;

	return <div className={className} />
}

export default WeatherIcon;

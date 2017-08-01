import React, { Component } from 'react';

import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
import './App.css';
import WeatherIcon from './components/WeatherIcon';
import WeatherDetails from './components/WeatherDetails';

class WeatherApp extends Component {
	state = {
		time: 1,
		city: '',
		temperature: '',
		weatherCode: '',
		fetching: true,
	}

	componentDidMount() {
		this.fetchIp();
	}

	fetchIp = () => {
		fetch('http://freegeoip.net/json/')
			.then(response => response.json())
			.then(({ city }) => this.fetchWeatherData(city))
			.catch(error => console.log(error));
	}

	fetchWeatherData = city => {
		const baseUrl = `https://crossorigin.me/http://api.openweathermap.org`;
		const path = `/data/2.5/weather`;
		const apiKey = `b3ac746512dc932694a267eb3e447103`;
		const query = `units=metric&lang=ru&appid=${apiKey}`

		fetch(`${baseUrl}${path}?q=${city}&${query}`)
			.then(response => response.json())
			.then(data => {
				const date = new Date();
				const time = date.getHours();

				this.setState({
					time,
					city,
					temperature: Math.round(data.main.temp),
					weatherCode: data.weather[0].id,
					fetching: false,
				});
			})
			.catch(error => console.log(error));
	}

  render() {
		const { icon, time, city, temperature, weatherCode } = this.state;
    return (
			<div className="weatherBackground" data-hour={time}>
        <WeatherIcon
          weatherCode={weatherCode}
          time={time}
				/>
        <WeatherDetails
          city={city}
          temperature={temperature}
				/>
      </div>
		);
  }
}

export default WeatherApp;

import React, { Component } from 'react';

import './App.css';

class WeatherApp extends Component {
	state = {
		icon: '',
		time: 1,
		city: '',
		temperature: '',
		weatherCode: '',
		fetching: true
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
		const baseUrl = `http://api.openweathermap.org`;
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
		const { city } = this.state;
    return (
      <h1>Hello! Now we in the {city} city! </h1>
    );
  }
}

export default WeatherApp;

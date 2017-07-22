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
		fetch('//freegeoip.net/json/')
			.then(response => response.json())
			.then(({ city }) => console.log(city))
			.catch(error => console.log(error));
	}

  render() {
    return (
      <h1>Hello!</h1>
    );
  }
}

export default WeatherApp;

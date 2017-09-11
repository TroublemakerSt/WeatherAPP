import React, { Component } from 'react';

import { connect } from 'react-redux';
import 'react-loading-bar/dist/index.css';
import './App.css';
import WeatherIcon from './components/WeatherIcon';
import WeatherDetails from './components/WeatherDetails';
import AddedCity from './components/AddedCity';
import { getWeather } from './actions';

class WeatherApp extends Component {
  // state = {
  //   time: 1,
  //   city: '',
  //   temperature: '',
  //   weatherCode: '',
  //   fetching: true
  // };

  componentDidMount() {
    this.props.dispatch(getWeather());
  }

  // fetchIp = () => {
  //   fetch('https://freegeoip.net/json/')
  //     .then(response => response.json())
  //     .then(({ city }) => this.fetchWeatherData(city))
  //     .catch(error => console.log(error));
  // };
  //
  // fetchWeatherData = city => {
  //   const baseUrl = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org`;
  //   const path = `/data/2.5/weather`;
  //   const apiKey = `b3ac746512dc932694a267eb3e447103`;
  //   const query = `units=metric&lang=ru&appid=${apiKey}`;
  //
  //   fetch(`${baseUrl}${path}?q=${city}&${query}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const date = new Date();
  //       const time = date.getHours();
  //
  //       this.setState({
  //         time,
  //         city,
  //         temperature: Math.round(data.main.temp),
  //         weatherCode: data.weather[0].id,
  //         fetching: false
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  render() {
    console.log('My props', this.props);
    const {
      time,
      city,
      weatherCode,
      temperature,
      minTemp,
      maxTemp
    } = this.props;
    return (
      <div className="weatherBackground" data-hour={time}>
        <WeatherIcon weatherCode={weatherCode} time={time} />
        <WeatherDetails
          city={city}
          temperature={temperature}
          minTemp={minTemp}
          maxTemp={maxTemp}
        />
        <AddedCity
          temperature={temperature}
          minTemp={minTemp}
          maxTemp={maxTemp}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

function mapStateToProps(state) {
  return {
    ...state.weather.default
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);

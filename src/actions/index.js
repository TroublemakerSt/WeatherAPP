export const GET_WEATHER_SECCUSS = 'GET_WEATHER_SECCUSS';
export const GET_HISTORY_CITY = 'GET_HISTORY_CITY';
export const DELETE_HISTORY_CITY = 'DELETE_HISTORY_CITY';

export function getWeather(city) {
  return (dispatch, getState) => {
    if (city) {
      fetchWeatherData(city).then(weather =>
        dispatch(getWeatherSuccess(weather))
      );
    } else {
      fetch('https://freegeoip.net/json/')
        .then(response => response.json())
        .then(({ city }) => fetchWeatherData(city))
        .then(weather => dispatch(getWeatherSuccess(weather)))
        .catch(error => console.log(error));
    }
  };
}

export function getWeatherSuccess(weather) {
  return {
    type: GET_WEATHER_SECCUSS,
    weather
  };
}

const fetchWeatherData = city => {
  const baseUrl = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org`;
  const path = `/data/2.5/weather`;
  const apiKey = `b3ac746512dc932694a267eb3e447103`;
  const query = `units=metric&lang=ru&appid=${apiKey}`;

  return fetch(`${baseUrl}${path}?q=${city}&${query}`)
    .then(response => response.json())
    .then(data => {
      const date = new Date();
      const time = date.getHours();
      const temperature = Math.round(data.main.temp);
      const weatherCode = data.weather[0].id;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;

      return {
        ...data,
        city,
        time,
        date,
        temperature,
        weatherCode,
        minTemp,
        maxTemp
      };
    })
    .catch(error => console.log(error));
};

export function historyCity(historyCity) {
  return {
    type: GET_HISTORY_CITY,
    historyCity
  };
}

export function deleteHistoryCity(id) {
  return {
    type: DELETE_HISTORY_CITY,
    id
  };
}

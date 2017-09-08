import { GET_WEATHER_SECCUSS, GET_HISTORY_CITY } from '../actions';

export default function getData(state = {}, action = {}) {
  switch (action.type) {
    case GET_WEATHER_SECCUSS:
      return {
        ...state,
        [action.weather.city]: action.weather,
        default: action.weather
      };
    case GET_HISTORY_CITY:
      return {
        ...state,
        historyCity: action.historyCity
      };
    default:
      return state;
  }
}

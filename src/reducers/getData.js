import { GET_WEATHER_SECCUSS } from '../actions';

export default function getData(state = {}, action = {}) {
  switch (action.type) {
    case GET_WEATHER_SECCUSS:
      return {
        ...state,
        [action.weather.city]: action.weather,
        default: action.weather
      };
    default:
      return state;
  }
}

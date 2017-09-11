import { GET_HISTORY_CITY, DELETE_HISTORY_CITY } from '../actions';

const initialState = {
  historyCity: {}
};

export default function historyOfSearching(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_CITY:
      let newId = +new Date();
      return {
        ...state,
        historyCity: {
          ...state.historyCity,
          [newId]: { city: action.historyCity, id: newId }
        }
      };

    case DELETE_HISTORY_CITY:
      const index = { ...state.historyCity };
      delete index[action.id];
      return {
        ...state,
        historyCity: index
      };

    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import data from './reducers/getData';
import historyOfSearching from './reducers/historyOfSearching';

const reducer = combineReducers({
  weather: data,
  history: historyOfSearching
});

export default reducer;

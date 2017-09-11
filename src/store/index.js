import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../rootReducer';
console.log('My reducer', reducer);
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(promise, thunk))
);

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../rootReducer';
console.log('My reducer', reducer);

const middleware = composeWithDevTools(applyMiddleware(promise, thunk, logger));
const store = createStore(reducer, middleware, autoRehydrate());

persistStore(store);

export default store;

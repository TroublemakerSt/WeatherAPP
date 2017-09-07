import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import WeatherApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

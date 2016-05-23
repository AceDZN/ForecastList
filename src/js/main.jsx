import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';


import App from './components/app';
import reducers from './reducers/index';

import ForkBanner from './components/fork-banner';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <ForkBanner url="https://github.com/AceDZN/ForecastList" />
      <App />
    </div>
  </Provider>
  , document.querySelector('#app'));

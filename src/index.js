import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import AppRoute from './routes/Routes'

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <AppRoute/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


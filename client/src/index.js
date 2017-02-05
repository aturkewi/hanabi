import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import Routes from './Routes'
import configureStore from './store/configureStore';

import { resetGame } from './actions/hanabiActions';

const store = configureStore();

store.dispatch(resetGame());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
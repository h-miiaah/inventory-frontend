import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux'; // createStore for the store, applyMiddleware is to incorporate thunk with our store, it comes from redux.
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'; // any component we wrap in a Provider will have access to our redux store.


import App from './App';

// set up the store ("import {createStore} from 'redux'")

ReactDOM.render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);
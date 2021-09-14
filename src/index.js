import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux'; // createStore for the store, applyMiddleware is to incorporate thunk with our store, it comes from redux.
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'; // any component we wrap in a Provider will have access to our redux store.
import {BrowserRouter as Router} from 'react-router-dom' // so we can use the router.
import boxReducer from './reducers/boxReducer'; // import the boxReducer reducer function.

import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // gives us access to the redux dev tools.

// set up the store ("import {createStore} from 'redux'")
let store = createStore(boxReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
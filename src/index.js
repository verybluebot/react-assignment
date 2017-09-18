import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './Reducers/index';

import './index.css';
import App from './App';

const middlewares = [thunk];

// not that this going to go in production...
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    const logger = createLogger({
        collapsed: true,
    });

    // adding logger middleware
    middlewares.push(logger);
}

// apply all (only 2 in this case) middlewares
const middleware = applyMiddleware(...middlewares);

// create store with middlewares
const store = createStore(reducer, middleware);


store.subscribe(() => {
    console.log('Store initialized')
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


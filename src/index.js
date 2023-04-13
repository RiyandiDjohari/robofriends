import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "tachyons";
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';

const rootReducers = combineReducers({searchRobots, requestRobots})
const logger = createLogger();
const store = configureStore({ 
  reducer: rootReducers,
  middleware: [thunk, logger],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

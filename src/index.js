import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk'
import { fetchRobots, searchRobots } from './reducers';


const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, fetchRobots });

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

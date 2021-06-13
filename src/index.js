import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {createStore, applyMiddleware, combineReducers } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';
import items from './reducers/items'
import currentUser from './reducers/currentUser'

const reducer = combineReducers({
  items
  currentUser
})
//reducer needs to be an object
//we take each reducer and pass it into an object here

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();












//any time, you change the state, you can see if it ends up in redux store in dev tools
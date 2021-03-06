import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import items from "./reducers/items";
import currentUser from "./reducers/currentUser";
import loginForm from "./reducers/loginForm";
import signupForm from "./reducers/signupForm";
import itemForm from "./reducers/itemForm";
import categories from "./reducers/categories";
import showSidebar from "./reducers/showSidebar";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const reducer = combineReducers({
  items,
  currentUser,
  loginForm,
  signupForm,
  itemForm,
  categories,
  showSidebar,
});
//reducer needs to be an object
//we take each reducer and pass it into an object here

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import Login from "./components/Login.js";
import Items from "./components/Items.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import ItemForm from "./components/ItemForm.js";
import { createBrowserHistory} from 'history';
import SignupLoginContainer from "./containers/SignupLoginContainer.js"
import {
  withRouter,
  Route
} from "react-router-dom";
class App extends Component{
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const history = createBrowserHistory();
    // console.log(history)
    return (
      <div>
        <h1 className="siteTitle">COMPACT</h1>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/items" component={Items}/>
        <Route exact path="/items/new" component={ItemForm}/>
        <Route history={history} exact path="/signup" component={Signup}/>
        <Route history={history} exact path="/login" component={Login}/>
        <Route exact path="/signin" component={SignupLoginContainer}/>
      </div>
    )
  };
}

export default withRouter((connect(null, { getCurrentUser })(App)));


// console.log("current user is", this.props.currentUser)

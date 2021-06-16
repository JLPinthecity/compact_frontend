import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import MainContainer from './containers/MainContainer.js';
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import Items from "./components/Items.js"
import About from "./components/About.js"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    // console.log("current user is", this.props.currentUser)
    return (
      <div>
        <h1 className="siteTitle">COMPACT</h1>
        <Navbar />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/items" component={Items}>
      </div>
    )
  };
}

export default connect(null, { getCurrentUser })(App);

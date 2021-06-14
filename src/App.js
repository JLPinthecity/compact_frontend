import React, { Component } from 'react'
import './App.css';
import Login from './components/Login.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
class App extends Component{

  componentDidMount(){
  
  }

  render(){
    return (
      <div>
       <Login/>
      </div>
    )
  };
}

export default connect()(App);

import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import MainContainer from './containers/MainContainer.js'

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
        <MainContainer />
      </div>
    )
  };
}

export default connect(null, { getCurrentUser })(App);

import React, { Component } from 'react'
import './App.css';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
class App extends Component{


  componentDidMount(){
    console.log("component did mount")
    this.props.getCurrentUser()
  }

  render(){
    console.log(this.props.currentUser)
    return (
      this.props.currentUser ? <Logout/> : <Login/>
    )
  };
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);

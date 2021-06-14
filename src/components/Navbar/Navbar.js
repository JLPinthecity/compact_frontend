import React from 'react';
import Login from '../Login.js';
import Logout from '../Logout.js';
import { connect } from 'react-redux';
import { MenuItems } from './MenuItems.js'
import About from '../About.js'
import {
    Link
  } from "react-router-dom";

class Navbar extends React.Component{
    state = {
        clicked: false
    }

    handleClick = (event) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    
    render(){
        return (
            <nav className="NavbarItems">
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <Link className="nav-links" to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                    
                    <li>
                        { this.props.currentUser ? <Logout/> : <Link className="nav-links" to="/login">LOGIN</Link> }
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Navbar)


//NEXT STEPS...
//put logout and login in separate
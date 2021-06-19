import React from 'react';
import Logout from '../Logout.js';
import SignupLoginContainer from "../../containers/SignupLoginContainer.js"
import { connect } from 'react-redux';
import { MenuItems } from './MenuItems.js'
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
                    {MenuItems.map((item) => {
                        return (
                            <li>
                                <Link className="nav-links" key={item.id} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}

                    <li>              
                        { this.props.currentUser ? <Logout/> : <SignupLoginContainer/>}
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

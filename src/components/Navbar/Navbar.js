import React from 'react';
import Login from '../Login.js';
import Logout from '../Logout.js';
import { connect } from 'react-redux';
import { MenuItems } from './MenuItems.js'

class Navbar extends React.Component{
    state = {
        clicked: false
    }
    
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="app-name">Compact</h1>
                <div className="menu-icon">

                </div>
                { this.props.currentUser ? <Logout/> : <Login/> }
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                    
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

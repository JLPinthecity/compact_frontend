import React from 'react';
import Login from '../Login.js';
import Logout from '../Logout.js';
import { connect } from 'react-redux';
import { MenuItems } from './MenuItems.js'


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
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                    
                </ul>
                { this.props.currentUser ? <Logout/> : <Login/> }
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
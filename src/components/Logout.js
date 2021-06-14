import React from "react";
import { connect } from "react-redux";
//import action creator that returns an action to call with dispatch, which causes our reducer to run
//we pass state and action to reducer, which returns a new state and causes a rerender


const Logout = () => {

    return (

        <form>
            <input type="submit" value="Log out" />
        </form>
        
    )

};

export default Logout


//our login/logout state will live in the redux store so we need connect
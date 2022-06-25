import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import Navbar from "./components/Menus/Navbar.js";
import Login from "./components/Forms/Login.js";
import Items from "./components/Items.js";
import About from "./components/About.js";
import ItemCard from "./components/ItemCard.js";
import Home from "./components/Home.js";
import Signup from "./components/Forms/Signup.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header/Header.js";
import { createBrowserHistory } from "history";
import NewItemFormContainer from "./containers/NewItemFormContainer.js";
import EditItemFormContainer from "./containers/EditItemFormContainer.js";
import { withRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const history = createBrowserHistory();
    const { items } = this.props;

    return (
      <div>
        <Header />

        <div className="page-container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/items" component={Items} />
            <Route history={history} exact path="/signup" component={Signup} />
            <Route history={history} exact path="/login" component={Login} />

            <Route exact path="/items/new" component={NewItemFormContainer} />
            <Route exact path="/footer" component={Footer} />
            <Route
              exact
              path="/items/:id"
              render={(props) => {
                const item = items.items.find(
                  (item) => item.id === props.match.params.id
                );
                return <ItemCard item={item} {...props} />;
              }}
            />
            <Route
              exact
              path="/items/:id/edit"
              render={(props) => {
                const item = items.items.find(
                  (item) => item.id === props.match.params.id
                );
                // console.log("FROM EDIT FORM ROUTE", item)
                return <EditItemFormContainer item={item} {...props} />;
              }}
            />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

// console.log("current user is", this.props.currentUser)
//render gives you the option of passing all router props or excluding all of them. when we pass props, we are spec not excluding any.

//edit:
//we are passing the new edititemformcontainer comp the item object that has all the form inputs from the store
//we are placing in wrapper bc we want to keep reducer a pure function

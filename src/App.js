import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from './pages/sign-in-sign-out/sign-in-sign-up.component';
import {auth} from './firebase/firebase.utils';

import "./app.scss";

class App extends Component {
  unsubscribeFromAuth = null;
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    };
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log('user::', user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
  
};

export default App;

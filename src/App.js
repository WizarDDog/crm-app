import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import Cart from './pages/cart';
import Inventory from './pages/inventory';
import Login from './pages/login';
import Main from './pages/main';
import Register from './pages/register';


class App extends Component  {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path="/cart"  exact component={Cart}/>
            <Route path="/inventory"  exact component={Inventory}/>
            <Route path="/login"  exact component={Login}/>
            <Route path="/register"  exact component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';

import { isAuthenticated } from "./services/auth";

import Home from './Pages/Web/Home';
import About from './Pages/Web/About';
import Contact from './Pages/Web/Contact';
import Login from './Pages/Web/Login';
import Register from './Pages/Web/Register';
import Dashboard from './Pages/Client/Dashboard';
import Extrato from './Pages/Client/Extrato'
import Saque from './Pages/Client/Saque'
import Conta from './Pages/Client/Conta'
import Addconta from './Pages/Client/Addconta'
import newpage from "./Pages/newpage"


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


export default function Routes() {
  return (

    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <PrivateRoute  path="/Dashboard" component={Dashboard} />
      <PrivateRoute path="/Extrato" component={Extrato} />
      <PrivateRoute path="/Saque" component={Saque} />
      <PrivateRoute path="/Conta" component={Conta} />
      <PrivateRoute path="/Addconta" component={Addconta} />
      <PrivateRoute path="/newpage" component={newpage} />
   </BrowserRouter>
  );
}

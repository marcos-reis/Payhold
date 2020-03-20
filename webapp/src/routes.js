import React from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';

import { isAuthenticated } from "./services/auth";

import Login from './Pages/Web/Login';
import Register from './Pages/Web/Register';
import Dashboard from './Pages/Client/Dashboard';
import Extrato from './Pages/Client/Extrato'
import Saque from './Pages/Client/Saque'
import Conta from './Pages/Client/Conta'
import Addconta from './Pages/Client/Addconta'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
      )
    }
  />
);


export default function Routes() {
  return (

    <BrowserRouter>

		<Route path="/" exact component={Login} />
		<Route path="/Login" component={Login} />
		<Route path="/Register" component={Register} />
		<Route path="/Dashboard" component={Dashboard} />
		<Route path="/Extrato" component={Extrato} />
		<Route path="/Saque" component={Saque} />
		<Route path="/Conta" component={Conta} />
		<Route path="/Addconta" component={Addconta} />
		<PrivateRoute path="/antierror" component={Addconta} />

   </BrowserRouter>
  );
}

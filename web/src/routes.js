import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Extrato from './pages/Extrato'
import Saque from './pages/Saque'
import Conta from './pages/Conta'
import Addconta from './pages/Addconta'

export default function Routes() {
  return (

    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Extrato" component={Extrato} />
      <Route path="/Saque" component={Saque} />
      <Route path="/Conta" component={Conta} />
      <Route path="/Addconta" component={Addconta} />
   </BrowserRouter>
  );
}

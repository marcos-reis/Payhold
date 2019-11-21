import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


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

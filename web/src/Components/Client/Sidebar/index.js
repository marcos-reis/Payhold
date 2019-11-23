import React from 'react';
import {Link} from 'react-router-dom'

import './style.css';

export default function Sidebar() {
  return (

    <div style={{ zIndex: 1 }} className=" position-fixed col-xl-2 col-lg-3 col-md-4 vh-100 justify-content-center flex-column d-md-flex d-none bg-custom-primary">
      <h1 className=" text-light font-weight-bold text-center">Payhold</h1>
      <div className="d-flex flex-column h-75 justify-content-center ">
       <Link to="/dashboard"><h5 className="text-light text-center">Início</h5></Link>
       <Link to="/extrato"><h5 className="text-light text-center">Extrato</h5></Link>
       <Link to="/conta" ><h5 className="text-light text-center">Contas</h5></Link>
       <Link to="/saque"> <h5 className="text-light text-center">Retiradas</h5></Link>
      </div>

    </div>
  );
}

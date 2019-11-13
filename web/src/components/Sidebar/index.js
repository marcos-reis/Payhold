import React from 'react';

import './style.css';

export default function Sidebar() {
  return (

    <div style={{ zIndex: 1 }} className=" position-fixed col-xl-2 col-lg-3 col-md-4 vh-100 justify-content-center flex-column d-md-flex d-none bg-custom-primary">
      <h1 className=" text-light font-weight-bold text-center">Payhold</h1>
      <div className="d-flex flex-column h-75 justify-content-center ">
        <h5 className="text-light text-center">Início</h5>
        <h5 className="text-light text-center">Extrato</h5>
        <h5 className="text-light text-center">Contas</h5>
        <h5 className="text-light text-center">Retiradas</h5>
      </div>

    </div>
  );
}

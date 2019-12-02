import React from 'react';
import {Link} from 'react-router-dom'

import {logout} from '../../../services/auth'


export default function Sidebar() {
  return (

    <div className=" position-fixed col-xl-2 col-lg-3 col-md-4 vh-100 justify-content-center flex-column d-md-flex d-none bg-light custom-sidebar ">

      <div className="d-flex flex-column h-75 justify-content-center px-5  ">

       <Link to="/dashboard"><h5 className="text-dark ">Início</h5></Link>
       <Link to="/extrato"><h5 className="text-dark ">Extrato</h5></Link>
       <Link to="/conta" ><h5 className="text-dark ">Contas</h5></Link>
       <Link to="/saque"> <h5 className="text-dark ">Retiradas</h5></Link>
      </div>

      <Link to='/dashboard' style={{fontSize:25}} className="text-dark font-weight-bold text-center " onClick={()=>{logout()}}>sair</Link>
    </div>
  );
}

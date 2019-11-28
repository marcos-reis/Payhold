import React,{useState} from 'react';
import MaterialIcon from 'material-icons-react';
import {Link} from 'react-router-dom'
import {logout} from '../../../services/auth'

import './style.css';
export default function Navbar() {

 const [ main,setMain] = useState(true)
  const openMain=()=>{
setMain(!main)
  }



  return (
    <div className="row">
      <nav style={{zIndex:1}} className="position-fixed navbar bg-custom-primary col-12 ">
     <div onClick={()=> openMain()} ><MaterialIcon size="50" color='#ffffff' icon="menu" /></div>
     <h1 className=" text-light font-weight-bold text-center">Payhold</h1>
      </nav>

    <div className={` position-fixed col-xl-2 col-lg-3 col-md-4 vh-100 justify-content-center flex-column d-md-flex d-none bg-light ${main?'custom-sidebar-on':'custom-sidebar-off ' }`}>

      <div className="d-flex flex-column h-75 justify-content-center px-5  ">

      <Link to="/dashboard"><h5 className="text-dark ">Início</h5></Link>
      <Link to="/extrato"><h5 className="text-dark ">Extrato</h5></Link>
      <Link to="/conta" ><h5 className="text-dark ">Contas</h5></Link>
      <Link to="/saque"> <h5 className="text-dark ">Retiradas</h5></Link>
      </div>

<Link to='/dashboard' style={{fontSize:20}} className="text-dark font-weight-bold text-center " onClick={()=>{logout()}}>sair</Link>
</div>


    </div>
  );
}

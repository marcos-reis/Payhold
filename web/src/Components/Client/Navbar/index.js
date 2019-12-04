import React,{useState} from 'react';
import MaterialIcon from 'material-icons-react';
import {Link} from 'react-router-dom'
import {logout} from '../../../services/auth'

import './style.css';
export default function Navbar() {

 const [ main,setMain] = useState(false)
  const openMain=()=> setMain(!main)



  return (
    <>
      <nav style={{zIndex:2}} className="position-fixed navbar bg-custom-primary col-12 ">
     <div onClick={()=> openMain()} ><MaterialIcon size="50" color='#ffffff' icon="menu" /></div>
     <h1 className=" text-light font-weight-bold text-center">Payhold</h1>
      </nav>

    <div style={{zIndex:1}} className={`text-center position-fixed col-xl-2 col-lg-3 col-md-4 vh-100 justify-content-center flex-column d-md-flex  bg-light ${main?'custom-sidebar-on':'custom-sidebar-off ' }`}>

      <div className="d-flex flex-column h-75 justify-content-center px-5  ">

      <Link to="/dashboard"><h5 className="text-dark ">INÍCIO</h5></Link>
      <Link to="/extrato"><h5 className="text-dark ">EXTRATO</h5></Link>
      <Link to="/conta" ><h5 className="text-dark ">CONTAS</h5></Link>
      <Link to="/saque"> <h5 className="text-dark ">RETIRADAS</h5></Link>
      </div>

<Link to='/dashboard' style={{fontSize:20}} className="text-dark font-weight-bold text-center " onClick={()=>{logout()}}>sair</Link>
</div>


    </>
  );
}

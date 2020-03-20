import React,{useState} from 'react';
import MaterialIcon from 'material-icons-react';
import {Link} from 'react-router-dom'
import {logout} from '../../../services/auth'
import {removeUserId} from '../../../services/user'

import './style.css';
export default function Navbar() {

 const [ main,setMain] = useState(true)
  const openMain=()=> setMain(!main)



  return (
    <>
      <nav style={{zIndex:2,height:'12vh'}} className="navbar  bg-custom-primary col-12 ">

     <h1 className=" text-light navbar-brand text-center">PAYHOLD</h1>
      </nav>


    <div style={{zIndex:1, height:'80vh'}} className={`sidebar text-center col-2 flex-fill justify-content-center flex-column d-md-flex  bg-light ${main?'custom-sidebar-on':'custom-sidebar-off ' }`}>

			<div className="d-flex flex-column h-75 justify-content-center px-5  ">

				<Link to="/dashboard"><h5 className="text-dark ">INÍCIO</h5></Link>
				<Link to="/extrato"><h5 className="text-dark ">EXTRATO</h5></Link>

			</div>

		<Link to='/login' style={{fontSize:20}} className="text-dark font-weight-bold text-center " onClick={()=>{logout();removeUserId()}}>sair</Link>
	</div>


    </>
  );
}

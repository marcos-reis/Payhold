import React from 'react';
import {Link} from 'react-router-dom'

import User from '../../../Assets/marcos-reis.jpg';

import {logout} from '../../../services/auth'

// import { Container } from './styles';
export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-light ">
        <img className="ml-auto" style={{ width: '60px', borderRadius: '50%' }} src={User} alt="Marcos Reis" />

        <div className="ml-3 ">
          <h5 className="text-gray">Marcos Reis</h5>

          <h6 className="text-grey font-weight-bold">Founder</h6>

        </div>
        <Link to='/dashboard' className="btn btn-outline-danger ml-5" onClick={()=>{logout()}}>sair</Link>

      </nav>


    </>
  );
}

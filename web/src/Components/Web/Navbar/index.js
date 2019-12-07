import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../Styles/Colors.css';
import '../../Styles/Fonts.css';
import './style.css'


export default function Navbar() {
  const [menu, setMenu] = useState(true);

  const toggle = () => {
    const menuVisible = document.querySelector('div.collapse');

    if (menu) {
      menuVisible.style = 'display:block';
      setMenu(false);
    } else {
      menuVisible.style = '';
      setMenu(true);
    }
  };

  return (
    <div className="bg-primary px-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link to="/" className="navbar-brand text-light"><h2 className="font-weight-bold">PAYHOLD </h2></Link>
        <button onClick={() => toggle()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-light">
                <h6 className="mx-3">INÍCIO</h6>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text-light"><h6 className="mx-3">SOBRE</h6></Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link text-light"><h6 className="mx-3">CONTATO</h6></Link>
            </li>
<li>
            <form className="form-inline my-lg-0 ">
            <Link to="/Login" style={{ backgroundColor: 'transparent' }} className="btn text-light my-2 my-sm-0">ENTRAR</Link>
            <Link to="/Register" className="btn bg-light my-2 my-sm-0"><span className="text-primary font-weight-bold">CADASTRE-SE</span></Link>
          </form>
          </li>
          </ul>

        </div>
      </nav>

    </div>
  );
}

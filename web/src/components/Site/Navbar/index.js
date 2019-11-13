import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Colors.css';
import '../../Styles/Fonts.css';


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
        <a href="/" className="navbar-brand text-light"><h1 className="font-weight-bold">Payhold</h1></a>
        <button onClick={() => toggle()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active">
              <a href="/" className="nav-link text-light">
                <h4 className="mx-3">Início</h4>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/About" className="nav-link text-light"><h4 className="mx-3">Sobre</h4></a>
            </li>
            <li className="nav-item">
              <a href="/Contact" className="nav-link text-light"><h4 className="mx-3">Contato</h4></a>
            </li>


          </ul>
          <form className="form-inline my-2 my-lg-0 ">
            <a href="/Login" style={{ backgroundColor: 'transparent' }} className="btn text-light my-2 my-sm-0">Entrar</a>
            <a href="/Register" className="btn bg-light my-2 my-sm-0"><span className="text-primary font-weight-bold">Cadastre-se</span></a>
          </form>
        </div>
      </nav>

    </div>
  );
}

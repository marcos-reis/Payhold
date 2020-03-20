import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

export default function Navbar() {
  const [menu, setMenu] = useState(true);

  const handleToggle = () => {
    const menuVisible = document.querySelector("div.collapse");

    if (menu) {
      menuVisible.style = "display:block";
      setMenu(false);
    } else {
      menuVisible.style = "";
      setMenu(true);
    }
  };

  return (

    <header className="menuVisible">
      <div style={{ backgroundColor: "#2B6BCB", zIndex: 10 }} className=" navbar navbar-expand-lg navbar-light">
        <Link to="/" className="logo navbar-brand">
         PAYHOLD
        </Link>
        <button onClick={() => handleToggle()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-light">
               Início
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text-light">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link text-light">Contato</Link>
            </li>
            <li>
              <form className="form-inline my-lg-0 ">
                <a href="https://app.payhold.com.br/Login" className="nav-link text-light">Entrar</a>
                <span className="separator"> </span>
                <a href="https://app.payhold.com.br/Register" className="nav-link  new-member">Crie sua conta</a>
              </form>
            </li>
          </ul>

        </div>
      </div>
    </header>


  );
}

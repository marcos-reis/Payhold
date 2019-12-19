import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import "../../Styles/Colors.css";
import "../../Styles/Fonts.css";
import "./style.css";


export default function Navbar() {
  const [menu, setMenu] = useState(true);

  const toggle = () => {
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

    <header className="bg-primary">
      <div className="container navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand text-light font-weight-bold">
         PAYHOLD
        </Link>
        <button onClick={() => toggle()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-light">
               INÍCIO
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text-light">SOBRE</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link text-light">CONTATO</Link>
            </li>
            <li>
              <form className="form-inline my-lg-0 ">
                <Link to="/Login" className="nav-link text-light">ENTRAR</Link>
                <Link to="/Register" className="nav-link text-primary bg-light new-member">CADASTRE-SE</Link>
              </form>
            </li>
          </ul>

        </div>
      </div>
    </header>


  );
}

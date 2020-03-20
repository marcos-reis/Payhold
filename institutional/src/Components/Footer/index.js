import React from "react";
import "./style.css";
import face from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#2B6BCB" }}>

      <div className="container">
        <div className="row">
          <h4 className="col text-center text-light txt2">
Siga nas redes sociais :
            <img className="mx-2" style={{ width: "25px", height: "25px" }} src={face} alt="Facebook" />
            <img className="mx-2" style={{ width: "25px", height: "25px" }} src={twitter} alt="Twitter" />
          </h4>


          <h4 className="col text-center text-light txt2">Baixe nosso app :</h4>
        </div>
        <hr className="bg-light" />
        <div className="row justify-content-center footer-items py-0">

          <a href="https://app.payhold.com.br" target="_newtab" className="px-3 text-center">

            <p className="txt3">Painel do Usuário </p>
          </a>
          <span className="px-1"> |</span>
          <a href="/About" target="_newtab" className="px-3 text-center ">

            <p className="txt3 ">Sobre nós </p>
          </a>
          <span className="px-1"> |</span>
          <a href="/" target="_newtab" className="px-3 text-center">

            <p className="txt3">Termos de uso </p>
          </a>
          <span className="px-1"> |</span>

          <a href="/Contato" target="_newtab" className="px-3 text-center">

            <p className="txt3">Fale conosco</p>
          </a>

        </div>

      </div>
      <div style={{ backgroundColor: "#3562A5" }} className="col">
        <p
          style={{ marginBottom: 0, fontSize: "0.8rem" }}
          className="text-light text-center font-weight-light py-2 "
        >
© 2019 Payhold - Todos os direitos reservados.

        </p>
      </div>
    </div>
  );
}

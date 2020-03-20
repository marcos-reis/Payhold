import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isNumber, isUndefined, isNull } from "util";
import api from "../../../services/api";

import "./style.css";

export default function Register({ history }) {
  const [NameOfUser, setNameOfUser] = useState("");
  const [EmailOfUser, setEmailOfUser] = useState("");
  const [CPFOfUser, setCPFOfUser] = useState("");
  const [FormattedCPFOfUser, setFormattedCPFOfUser] = useState("");
  const [PasswordOfUser, setPasswordOfUser] = useState("");
  const [MessageErrorRegister, setMessageErrorRegister] = useState("");

  const formatASNumber = (n) => {
    if (isUndefined(n)) { return 0; }
    if (isNull(n)) { return 0; }
    if (n === "%") { return 0; }
    if (!isNumber(n)) { return parseInt(n.replace(/\D/g, ""), 10); }
    if (isNumber(n)) { return n; }
  };

  const FormatCPF = (cpf) => {
    const FormattedCPF = cpf
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    setFormattedCPFOfUser(FormattedCPF);
    const FormattedCPFAtNumber = formatASNumber(FormattedCPF);
    setCPFOfUser(FormattedCPFAtNumber);
  };


  const RegisterUser = async () => {
    const response = await api.post("/users", {
      fullname: NameOfUser,
      cpf: CPFOfUser,
      email: EmailOfUser,
	  password: PasswordOfUser,

	});
	const {message} = response.data

    if (response.data.user === undefined) {
	  setMessageErrorRegister("Email/CPF já está em uso");
	  setTimeout(() => setMessageErrorRegister(""), 3000);
	}
	if (message === undefined) {
		alert('Usuário cadastro.')
      	history.push("/login");
    }
  };


  return (

    <div className="bg-gradPrimary d-flex ">
        <div style={{height:"100vh"}} className="d-flex justify-content-center align-self-start bg-light">
          <div className="bg-light col-12 col-lg-5 col-md-8 row justify-content-center mx-5 pt-5">
            <div className="col-12">
              <h1 style={{color:'#3562A5'}} className="text-center font-weight-bold pb-3">PAYHOLD</h1>
			  <h2 className=" font-weight-lighter pb-2" style={{color:'rgb(107, 107, 107)'}}>Cadastre-se, é grátis</h2>
			</div>

            {/*
            <div style={{ cursor: 'pointer' }} className="col-8 text-center border py-5 mb-5">
              <label style={{ cursor: 'pointer' }} htmlFor="inThumbnail" id="thumbnail">
                <input id="inThumbnail" type="file" className="form-control" />
                <MaterialIcon icon="add_a_photo" size="large" />
              </label>

            </div>
*/}
            <form className="col-12">

              <input type="text" onChange={(e) => setNameOfUser(e.target.value)} value={NameOfUser} className="form-control mb-4" placeholder="Nome Completo" />
              <input type="text" onChange={(e) => FormatCPF(e.target.value)} value={FormattedCPFOfUser} className="form-control mb-4" placeholder="CPF" />
              <input type="text" onChange={(e) => setEmailOfUser(e.target.value)} value={EmailOfUser} className="form-control mb-4" placeholder="Email" />
              <input type="password" onChange={(e) => setPasswordOfUser(e.target.value)} value={PasswordOfUser} className="form-control mb-2 " placeholder="Senha" />

			  <span style={{fontSize: '9px',
    position: 'absolute',color:'rgb(107, 107, 107)'}}>Ao clicar em cadastrar você estará concordando com os nossos <span className="text-primary">Termos de Uso</span>
</span>
              <span style={{    marginTop: '20px'}} className="text-danger position-absolute">{MessageErrorRegister}</span>
            </form>
            <div className="col-8">
              <button type="button" onClick={() => (RegisterUser())} className="btn btn-gradPrimary   w-100">Cadastrar</button>
            </div>
			<div className="col-8 text-center">
			<Link to="/Login" className="btn  " style={{fontSize:'15px', color:'rgb(107, 107, 107)'}}>
            Já é um membro?
                <span className="text-primary ">{'\n'}Login</span>
              </Link>
			  </div>
			  <Link to="/"	 className="btn w-50  text-primary font-weight-lighter">Voltar</Link>
          </div>
        </div>
		<div style={{height:"100vh"}} className="col d-flex justify-content-center align-items-center">
			<div style={{height:"50vh"}} className="col row justify-content-center align-items-center">
				<h6 className="text-center text-light" style={{fontSize:'22px',fontWeight:'300'}}>Ganhe cashback em suas compras e ainda ganhe rendimentos.</h6>
				<h1 className="text-center text-light">PAYHOLD</h1>
			</div>
		</div>
      </div>
  );
}

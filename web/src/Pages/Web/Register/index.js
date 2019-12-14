import React, { useState } from "react";
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
    if (response.data.message === undefined) {
      history.push("/login");
    }
    if (response.data.user === undefined) {
      setMessageErrorRegister("Email/CPF já está em uso");
    }
  };


  return (

    <div className="bg-gradient-primary">
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="bg-light col-12 col-lg-5 col-md-8 row justify-content-center m-5 py-5">
            <div className="col-12">
              <h1 className="text-primary text-center font-weight-bold pb-5">Payhold</h1>
            </div>
            {/*
            <div style={{ cursor: 'pointer' }} className="col-8 text-center border py-5 mb-5">
              <label style={{ cursor: 'pointer' }} htmlFor="inThumbnail" id="thumbnail">
                <input id="inThumbnail" type="file" className="form-control" />
                <MaterialIcon icon="add_a_photo" size="large" />
              </label>

            </div>
*/}
            <form className="col-12 mb-5">

              <input type="text" onChange={(e) => setNameOfUser(e.target.value)} value={NameOfUser} className="form-control mb-4" placeholder="Nome Completo" />
              <input type="text" onChange={(e) => FormatCPF(e.target.value)} value={FormattedCPFOfUser} className="form-control mb-4" placeholder="CPF" />
              <input type="text" onChange={(e) => setEmailOfUser(e.target.value)} value={EmailOfUser} className="form-control mb-4" placeholder="Email" />
              <input type="password" onChange={(e) => setPasswordOfUser(e.target.value)} value={PasswordOfUser} className="form-control mb-2 " placeholder="Senha" />
              <span className="text-danger position-absolute">{MessageErrorRegister}</span>
            </form>
            <div className="col-8">
              <button type="button" onClick={() => (RegisterUser())} className="btn btn-gradient-primary rounded-pill font-weight-bold w-100 mb-3">Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

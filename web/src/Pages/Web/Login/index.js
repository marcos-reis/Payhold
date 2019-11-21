import React from 'react';


import './style.css';

export default function Login() {
  return (
    <div className="bg-gradient-primary">

      <div className="container p-5">
        <div className="row justify-content-center">
          <div className=" col-12 col-lg-5 col-md-8 bg-light row justify-content-center py-5 my-5">
            <div className="col-12 pb-5">
              <a href="/" className="text-decoration-none"><h1 className="text-primary text-center font-weight-bold ">Payhold</h1></a>
            </div>
            <div className="col-11">
              <input className="form-control mb-4" placeholder="Email" />
              <input className="form-control mb-5" placeholder="Senha" />
            </div>
            <div className="col-10 text-center">
              <a href="/" className="btn btn-gradient-primary w-75 mb-3 rounded-pill">Entrar</a>
              <a href="/" className="btn text-primary w-100 mb-5 font-weight-bold">Esqueçeu a senha?</a>
              <a href="/Register" className="btn ">
            Não é um membro?
                <span className="text-primary font-weight-bold">Criar Conta</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

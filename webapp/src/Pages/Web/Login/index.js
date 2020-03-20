import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from '../../../services/api'
import {login} from '../../../services/auth'

import {useDispatch,useSelector} from 'react-redux'

import "./style.css";

export default function Login({ history }) {

	const selectState = useSelector(state => state.user)
	const dispatchState = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  async function authentication() {
	const response = await api.post("/sessions", {
		email,
		password,

	  });
	  const {token} =  response.data
	  if(!token){
		setMessageError(true)
		setTimeout(() => setMessageError(false), 3000);
	  }else{
	login(token)
	dispatchState({type:'PRE_SAVE_DATA_USER'})
	history.push("/dashboard");

	  }

  }


  return (

    <div className="bg-gradPrimary text-center" style={{height:'100vh'}}>

      <div className="container p-0" >
        <div className="row justify-content-center">
          <div className=" col-12 col-lg-5 col-md-8 bg-light row justify-content-center py-5 my-5">
            <div className="col-12 pb-5">
			<h1>{selectState.email}</h1>
  <a href="https://www.payhold.com.br" className="text-decoration-none"><h1 style={{color:'#3562A5'}} className="text-center font-weight-bold ">PAYHOLD</h1></a>
            </div>
            <form className="col-11 mb-5">
              <input className="form-control mb-4" autoComplete="on" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" value={email} />
              <input className="form-control "  autoComplete="on" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" value={password} />
		{messageError && <span className="text-danger position-absolute">
                Email / senha inválido
              </span>}
            </form>
            <div className="col-10 text-center">
              <button type="button" onClick={() => authentication()} className="btn btn-gradPrimary w-75 mb-3 ">Entrar</button>
              <Link to="/"  style={{color: '#6b6b6b'}}	 className="btn w-50  font-weight-lighter">Esqueceu a senha?</Link>
              <Link to="/Register" style={{color: '#6b6b6b'}} className="btn font-weight-lighter ">
            Não é um membro?
  <span className="text-primary">{'\n'}Criar Conta</span>
              </Link>
			  <a href="https://www.payhold.com.br"	 className="btn w-50  text-primary font-weight-lighter">Voltar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

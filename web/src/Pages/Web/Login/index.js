import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"

import api from '../../../services/api'
import {login} from '../../../services/auth'

import './style.css';

export default function Login({history}) {
  const dispatch = useDispatch()
  const {login:authlogin} = useSelector(state => state)

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState('')

  async function authentication(){
    const response = await api.post("/sessions",{
      email,
      password
    })
if (response.data.message === undefined){
    dispatch({type:"INITIAL_SESSION",data:response.data})
    login(response.data.token)
    history.push('/dashboard')

  }else{
    dispatch({type:"ERROR_SESSION",data:response.data})
  }


  }

  return (

    <div className="bg-gradient-primary">


      <div className="container p-5">
        <div className="row justify-content-center">
          <div className=" col-12 col-lg-5 col-md-8 bg-light row justify-content-center py-5 my-5">
            <div className="col-12 pb-5">
              <Link to="/" className="text-decoration-none"><h1 className="text-primary text-center font-weight-bold ">Payhold</h1></Link>
            </div>
            <div className="col-11 mb-5">
              <input className="form-control mb-4" onChange={(e)=>setEmail(e.target.value)} type="text"  placeholder="Email" value={email} />
              <input className="form-control " onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Senha" value={password}/>
            <span className="text-danger position-absolute">{authlogin.message}</span>
            </div>
            <div className="col-10 text-center">
              <button onClick={()=>authentication()} className="btn btn-gradient-primary w-75 mb-3 rounded-pill">Entrar</button>
              <Link to="/" className="btn text-primary w-100 mb-5 font-weight-bold">Esqueçeu a senha?</Link>
              <Link to="/Register" className="btn ">
            Não é um membro?
                <span className="text-primary font-weight-bold">Criar Conta</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

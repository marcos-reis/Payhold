import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import api from "../services/api"


// import { Container } from './styles';

export default function Pages() {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)

  async function authentication(){
    const response = await api.post("/sessions",{
      email:"marcos@payhold.com",
      password:'123456789'
    })
    dispatch({type:"INITIAL_SESSION",data:response.data})


  }

  return (
    <div>
       <button onClick={()=>authentication()}>CALL API</button>

    </div>
  );
}

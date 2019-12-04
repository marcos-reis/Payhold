import React,{useState,useEffect} from 'react';
import { isNumber } from 'util';

import Navbar from '../../../Components/Client/Navbar';

import api from '../../../services/api'

import './style.css';


export default function Saque({history}) {
	const formatASMoney = (n) => {
		const numberFormated = formatASNumber(n)
		const moneyFormated = numberFormated.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
		return moneyFormated
	}
	const formatASNumber = (n)=> {
		if(!isNumber(n)){return  parseInt(n.replace(/\D/g, ''))/100}
		if(isNumber(n)){return  n/100}

	}
	const changeState = (setState,State) =>{
		setState(State)
	}

  const [balance,setBalance] = useState(null)
  const [valueTransfer, setValueTransfer] = useState('R$ 0,00')

  useEffect(()=>{

    async function loadData(){
    const response = await api.get('/users/1',{
      headers:{Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NDE5NjQ4NX0.t2qqq_pNt7fC5TSVim8en70j68zsBtQ7oQdQCxrEm7E"}
    });

var total = 0
response.data.user[0].cashbacks.concat(response.data.user[0].transfers).map((v)=>  total += v.value)

setBalance(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

}


loadData()

  },[])

  async function requestTransfer(){
    await api.post('/transfers',{
      account_id: localStorage.getItem("AccountID"),
      user_id:1,
      value:formatASNumber(valueTransfer)
    })
    //localStorage.removeItem("valueTransfer")
	//localStorage.removeItem("AccountID")
	history.push('/extrato')
  }

  function confirmValueTransfer(){
requestTransfer()
  }

  return (<>

     <div className="row" style={{ backgroundColor: '#E4E7EA' }}>

		 <Navbar/>


               <div className="container mt-5 pt-5">

                 <div className="justify-content-center row">
                   <div className="row text-center col-12">
                    <span className="col-12 text-grey">Saldo Disponível</span>
                    <h3 className="col-12 ">{balance}</h3>
                 </div>
                 <div className="mt-5 py-5 col-11 bg-light justify-content-center text-center flex-column row">
        <h2 className="mb-5">Quanto você deseja<br/> retirar?</h2>
  <input style={{fontSize:35}} className="border-0 text-center mb-5 text-grey" onChange={/*(v)=>setValueTransfer(v.target.value)*/ (e)=>changeState(setValueTransfer,formatASMoney(e.target.value))} value={valueTransfer}/>
        <span style={{fontSize:10}}  className="text-grey">Valor mínimo <br/>para retirada R$ 20,00</span>

              </div>
              <button onClick={()=>confirmValueTransfer()} style={{borderRadius:3}} className="my-4 text-light py-2 px-5  bg-primary">Confirma</button>

               </div>
               </div>

               </div>



    </>
  );
}

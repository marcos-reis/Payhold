import React,{useState,useEffect} from 'react';


import api from '../../../services/api'

import Navbar from '../../../Components/Client/Navbar';
import Sidebar from '../../../Components/Client/Sidebar';


import './style.css';

export default function Conta({history}) {



  const [conta,setConta] =useState([])
  const [isNull,setIsNull] = useState(true)
  useEffect(()=>{
    async function loadData(){
     const response = await api.get('/bankaccounts/1',{headers:{
       Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NDE5NjQ4NX0.t2qqq_pNt7fC5TSVim8en70j68zsBtQ7oQdQCxrEm7E"
     }})
     setConta(response.data.bankaccounts[0].accounts)
    if(response.data.bankaccounts[0].accounts !== undefined){

    setIsNull(!true)

    }}
    loadData()

  },[])
  function confirmAccountOFTransfer(v){
    localStorage.setItem('AccountID',v.id)
    history.push('/saque')
  }

  return (<>
    <Sidebar />
    <div className="row vh-100" style={{ backgroundColor: '#E4E7EA' }}>
        <div className="col-xl-2 d-none d-md-block col-0 col-lg-3 col-md-4" />
            <div className="p-0 col-md-8 col-lg-9 col-xl-10">
               <Navbar/>


{isNull? <div className="container text-center">
                  <h3 className="text-grey my-5 py-5">Nenhuma Conta Cadastrada</h3>
                  <a href="/addconta">Adicionar conta</a>


               </div>               :               <div className="mt-5 container text-center text-gray">
               <h3>Selecione uma Conta</h3>
                 <div className="row justify-content-center">

{conta.map((v)=>(
            <div  key={v.id} onClick={()=>confirmAccountOFTransfer(v)} style={{cursor:'pointer'}} className="mt-5  col-lg-3 col-md-5 col-sm-6 col-7  justify-contatiner-center">
            <img  src={v.url_thumbnail} alt={v.bank}/>
            <div className=" row p-2 m-0 flex-column text-light justify-content-center bg-gray">
              <h4><strong>{v.bank}</strong></h4>
              <span>Agência : {v.agency}</span>
              <span>Conta e Digito : {v.account}</span>
            </div>
          </div>
))}




               </div>
               </div> }



            </div>
            </div>


    </>
  );
}

import React,{useState,useEffect} from 'react';

import api from '../../../services/api'

import Navbar from '../../../Components/Client/Navbar';
import Sidebar from '../../../Components/Client/Sidebar';
import Saque from '../Saque'
import './style.css';


export default function Extrato() {

  const [cashbacks,setCashbacks] = useState([])
  const [transfers,setTransfers] = useState([])

  const [historyData,setHistoryData] = useState([])

  const [requestTransfers,setRequestTransfers] = useState([])

  const [request,setRequest] = useState(false)

  const [balance,setBalance] =useState([])

  useEffect(()=>{

    async function loadData(){
    const response = await api.get('/users/1',{
      headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NDE5NjQ4NX0.t2qqq_pNt7fC5TSVim8en70j68zsBtQ7oQdQCxrEm7E"}
    });


setCashbacks(response.data.user[0].cashbacks)
setTransfers(response.data.user[0].transfers)
setRequestTransfers(response.data.user[0].requestTransfers)

var total = 0
response.data.user[0].cashbacks.map((v)=>  total += v.value)

setHistoryData(response.data.user[0].cashbacks.concat(response.data.user[0].transfers,response.data.user[0].requestTransfers))
setBalance(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

}


loadData()

  },[])

  function requestTransfer(){
    setRequest(true)

  }

console.log()

  return (<>
{request ? <Saque/> :   <> <Sidebar />
    <div className="row" style={{ backgroundColor: '#E4E7EA' }}>
        <div className="col-xl-2 col-lg-3 col-md-4" />
            <div className="p-0 col-md-8 col-lg-9 col-xl-10">
               <Navbar/>
               <div className="container">
                 <select>
                   <option>Mês Atual</option>
                   <option>Outubro</option>
                   <option>Setembro</option>
                   <option>Agosto</option>
                 </select>

                 <div className="justify-content-center row">
                   <div className="row text-center col-12">
                    <span className="col-12 text-grey">Saldo Disponível</span>
  <h3 className="col-12 ">{balance}</h3>
                 </div>
                 <div className="mt-5  col-11 bg-light justify-content-center row">

{console.log(historyData)}
                  {
                  historyData.map((v)=>(
                    <div key={v.value} className="row mx-0 col-10 my-0 pt-5 justify-content-center" key={v.id}>
                      <li className="col-lg-8  col-9 text-grey"><strong>{v.operation}</strong></li>
                      <li className="col-lg-3  col-3 text-grey">15 NOV</li>
                      <li className="col-lg-11  col-12 "> {v.description}</li>
                      <li className="col-lg-11 col-12 text-grey">{v.value.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</li>
                      <hr className="border w-75 mt-5 my-0"/>
                    </div>

                  ))}





              </div>
              <button onClick={()=>requestTransfer()} style={{borderRadius:3}} className="my-4   text-light py-2 px-5  bg-primary">Solicitar Retirada</button>

               </div>
               </div>
            </div>
            </div>
</>
            }



    </>
  );
}

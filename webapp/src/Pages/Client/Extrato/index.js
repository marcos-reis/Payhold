import React,{useState,useEffect} from 'react';

import Navbar from '../../../Components/Client/Navbar';

import './style.css';
import api from '../../../services/api'
import {loadTransactions} from '../../../Constants/mocks'

export default function Extrato({history}) {

	const [historyData,setHistoryData] = useState([])
	const [balance,setBalance] =useState([])

useEffect(()=>{

	async function loadData(){
	const response = await	api.get('/moviment')
	//setHistoryData(loadTransactions||response.data.moviments)
	setBalance( 150||response.data.valueBalance)


}	loadData()

},[])





function requestTransfer(){
//history.push('/conta')

}


  return (<>

    <div className="row m-0" style={{ backgroundColor: '#F8F8F9' }}>
        <Navbar/>
            <div className="col-10">
                    <div className="container mt-3">
                       <h3 style={{fontSize:'1.0rem',color:'#676161'}}>Mês Atual</h3>
                      <select class="browser-default custom-select">
                        <option >Janeiro</option>
                      </select>

                      <div className="justify-content-center row">
                        <div className="row text-center col-12">
  <span className="col-12 text-grey">Saldo Disponível</span>
                      <h3 style={{color:'#676161'}} className="col-12 ">{balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                      </div>

                      <div style={{overflow: 'scroll',height:'39vh'}} className="mt-5  col-11 bg-light justify-content-center row">
						<div style={{backgroundColor:'#fff'}} className="row  col-8 px-4 py-3">
							<div className="col-9">
							<p style={{fontSize:'1.2rem',color:'#5E5C5C'}} className="font-weight-bold">Compras na amazon</p>
							<p style={{color:'#676161'}}>Pedido 556848</p>
							<p style={{color:'#676161', fontWeight:'500' }}>R$ 15,00</p>
							</div>
							<div className="col text-left pl-5">
								<p style={{color:'#ADA5A5',fontWeight:'300'}}>21 MAI</p>
								<p style={{color:'#EF5757'}}>Pendente</p>
							</div>

						</div>

						<div style={{backgroundColor:'#fff'}} className="row mt-2 col-8 px-4 py-3">
							<div className="col-9 ">
							<p style={{fontSize:'1.2rem',color:'#5E5C5C'}} className="font-weight-bold">Compras na amazon</p>
							<p style={{color:'#676161'}}>Pedido 556848</p>
							<p style={{color:'#676161', fontWeight:'500' }}>R$ 15,00</p>
							</div>
							<div className="col text-left pl-5">
								<p className="" style={{color:'#ADA5A5',fontWeight:'300'}}>21 MAI</p>
								<p style={{color:'#2A9210'}}>Confirmado</p>
							</div>

						</div>

						<div style={{backgroundColor:'#fff'}} className="row mt-2 col-8 px-4 py-3">
							<div className="col-9 ">
							<p style={{fontSize:'1.2rem',color:'#5E5C5C'}} className="font-weight-bold">Compras na amazon</p>
							<p style={{color:'#676161'}}>Pedido 556848</p>
							<p style={{color:'#676161', fontWeight:'500' }}>R$ 15,00</p>
							</div>
							<div className="col text-left pl-5">
								<p className="" style={{color:'#ADA5A5',fontWeight:'300'}}>21 MAI</p>
								<p style={{color:'#2A9210'}}>Confirmado</p>
							</div>

						</div>

                    </div>
                    <button onClick={()=>requestTransfer()} style={{borderRadius:3}} className="my-4 btn  text-light py-2 px-5  bg-primary">Solicitar Retirada (Em breve)</button>

                    </div>

                    </div>

            </div>
            </div>


    </>
  );
}

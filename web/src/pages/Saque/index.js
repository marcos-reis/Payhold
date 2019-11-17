import React,{useState,useEffect} from 'react';

import api from '../../services/api'

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './style.css';


export default function Saque() {
  return (<>
    <Sidebar />
    <div className="row" style={{ backgroundColor: '#E4E7EA' }}>
        <div className="col-xl-2 col-lg-3 col-md-4" />
            <div className="p-0 col-md-8 col-lg-9 col-xl-10">
               <Navbar/>
               <div className="container">

                 <div className="justify-content-center row">
                   <div className="row text-center col-12">
                    <span className="col-12 text-grey">Saldo Disponível</span>
                    <h3 className="col-12 ">R$ 350,00</h3>
                 </div>
                 <div className="mt-5 py-5 col-11 bg-light justify-content-center text-center flex-column row">
<h2 className="mb-5">Quanto você deseja<br/> retirar?</h2>
<input style={{fontSize:35}} className="border-0 text-center mb-5 text-grey" defaultValue="R$ 0,00"/>
<span style={{fontSize:10}}  className="text-grey">Valor mínimo <br/>para retirada R$ 20,00</span>

              </div>
              <button style={{borderRadius:3}} className="my-4 text-light py-2 px-5  bg-primary">Confirma</button>

               </div>
               </div>
            </div>
            </div>


    </>
  );
}

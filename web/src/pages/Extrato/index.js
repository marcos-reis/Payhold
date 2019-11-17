import React,{useState,useEffect} from 'react';

import api from '../../services/api'

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './style.css';


export default function Extrato() {
  return (<>
    <Sidebar />
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
                    <h3 className="col-12 ">R$ 350,00</h3>
                 </div>
                 <div className="mt-5 col-11 bg-light justify-content-center row">

                <ul className="row col-12  justify-content-center">
                  <li className="mt-5 col-lg-8  col-9 text-grey"> <strong>Cashback</strong></li>
                  <li className="mt-5 col-lg-3  col-3 text-grey">15 NOV</li>
                  <li className="col-lg-11 col-12">Compras na Amazon</li>
                  <li className="col-lg-11 col-12 text-grey">R$ 10,00</li>

                  <li className="mt-5 col-lg-8  col-9 text-grey"> <strong>Cashback</strong></li>
                  <li className="mt-5 col-lg-3  col-3 text-grey">15 NOV</li>
                  <li className="col-lg-11 col-12">Compras na Amazon</li>
                  <li className="col-lg-11 col-12 text-grey">R$ 10,00</li>

                  <li className="mt-5 col-lg-8  col-9 text-grey"> <strong>Cashback</strong></li>
                  <li className="mt-5 col-lg-3  col-3 text-grey">15 NOV</li>
                  <li className="col-lg-11 col-12">Compras na Amazon</li>
                  <li className="col-lg-11 col-12 text-grey">R$ 10,00</li>

                </ul>

              </div>
              <button style={{borderRadius:3}} className="my-4   text-light py-2 px-5  bg-primary">Solicitar Retirada</button>

               </div>
               </div>
            </div>
            </div>


    </>
  );
}

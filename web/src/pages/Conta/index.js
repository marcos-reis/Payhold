import React,{useState,useEffect} from 'react';

import api from '../../services/api'

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './style.css';


export default function Conta() {
  return (<>
    <Sidebar />
    <div className="row vh-100" style={{ backgroundColor: '#E4E7EA' }}>
        <div className="col-xl-2 d-none d-md-block col-0 col-lg-3 col-md-4" />
            <div className="p-0 col-md-8 col-lg-9 col-xl-10">
               <Navbar/>
               <div className="container text-center">
                  <h3 className="text-grey my-5 py-5">Nenhuma Conta Cadastrada</h3>
                  <a href="/addconta">Adicionar conta</a>


               </div>
            </div>
            </div>


    </>
  );
}

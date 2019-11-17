import React,{useState,useEffect} from 'react';

import api from '../../services/api'

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './style.css';


export default function Addconta() {
  return (<>
    <Sidebar />
    <div className="row vh-100" style={{ backgroundColor: '#E4E7EA' }}>
        <div className="col-xl-2 d-none d-md-block col-0 col-lg-3 col-md-4" />
            <div className="p-0 col-md-8 col-lg-9 col-xl-10">
               <Navbar/>
               <div className="container text-center row flex-column">
                  <h3 className="my-5 py-5">Cadastre sua conta</h3>
                  <div>
                    <label>Cod</label>
                    <input/>
                  </div>
                  <div>
                    <label>Agência</label>
                    <input/>
                  </div>
                  <div>
                    <label>Conta e digito</label>
                    <input/>
                  </div>
                  <div>
                    <button style={{borderRadius:3}} className="bg-primary text-light py-2 px-5" >Confirma</button>
                  </div>

               </div>
            </div>
            </div>


    </>
  );
}

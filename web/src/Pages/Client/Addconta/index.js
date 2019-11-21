import React from 'react';


import Navbar from '../../../Components/Client/Navbar';
import Sidebar from '../../../Components/Client/Sidebar';
import './style.css';


export default function Addconta() {
  return (<>
    <Sidebar />
    <div className="row vh-100" style={{ backgroundColor: '#E4E7EA' }}>
        <div className="col-xl-2 d-none d-md-block col-0 col-lg-3 col-md-4" />
            <div className="p-0 col-md-8 col-lg-9 col-xl-10">
               <Navbar/>
               <div className="container justify-content-center row ">
                 <div className="col-12 text-center">
                  <h3 className="my-5 py-5">Cadastre sua conta</h3>
                  </div>
                  <div className="col-7">
                    <label>Cod</label><br/>
                    <input/>
                  </div>
                  <div className="col-7 ">
                    <label>Agência</label><br/>
                    <input/>
                  </div>
                  <div className="col-7">
                    <label>Conta e digito</label><br/>
                    <input/>
                  </div>
                  <div className="col-12 text-center">
                    <button style={{borderRadius:3}} className="bg-primary text-light py-2 px-5" >Confirma</button>
                  </div>

               </div>
            </div>
            </div>


    </>
  );
}

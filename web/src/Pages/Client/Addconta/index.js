import React from "react";


import Navbar from "../../../Components/Client/Navbar";
import Sidebar from "../../../Components/Client/Sidebar";
import "./style.css";


export default function Addconta() {
  return (
    <>
      <Sidebar />
      <div className="row vh-100" style={{ backgroundColor: "#E4E7EA" }}>
        <div className="col-xl-2 d-none d-md-block col-0 col-lg-3 col-md-4" />
        <div className="p-0 col-md-8 col-lg-9 col-xl-10">
          <Navbar />
          <div className="container justify-content-center row ">
            <div className="col-12 text-center">
              <h3 className="my-5 py-5">Cadastre sua conta</h3>
            </div>
            <form>
              <div className="row justify-content-center">
                <div className="form-group col-7">
                  <label htmlFor="inputEstado">Qual o seu banco?</label>
                  <select id="inputEstado" className="form-control">
                    <option selected>237 - Bradesco</option>
                    <option>260 - Nubank</option>
                    <option>237 - Next</option>
                    <option>077 - Inter</option>
                  </select>
                </div>

                <div className="form-group col-7">
                  <label htmlFor="inputAddress">Agência</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Ex: 0001" />
                </div>
                <div className="form-group col-7">
                  <label htmlFor="inputAddress2">Conta e dígito (Sem hífen)</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Ex: 55587655" />
                </div>

              </div>
            </form>
            <div className="col-12 text-center">
              <button style={{ borderRadius: 3 }} className="bg-primary text-light mt-4   py-2 px-5">Confirma</button>
            </div>

          </div>
        </div>
      </div>


    </>
  );
}

import React from 'react';
import MaterialIcon from 'material-icons-react';


import './style.css';

export default function Register() {
  return (
    <div className="bg-gradient-primary">
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="bg-light col-12 col-lg-5 col-md-8 row justify-content-center m-5 py-5">
            <div className="col-12">
              <h1 className="text-primary text-center font-weight-bold pb-5">Payhold</h1>
            </div>
            <div style={{ cursor: 'pointer' }} className="col-8 text-center border py-5 mb-5">
              <label style={{ cursor: 'pointer' }} htmlFor="inThumbnail" id="thumbnail">
                <input id="inThumbnail" type="file" className="form-control" />
                <MaterialIcon icon="add_a_photo" size="large" />
              </label>

            </div>
            <div className="col-12">

              <input className="form-control mb-4" placeholder="Nome Completo" />
              <input className="form-control mb-4" placeholder="Email" />
              <input className="form-control mb-4" placeholder="CPF" />
              <input className="form-control mb-5" placeholder="Senha" />
            </div>
            <div className="col-8">
              <a href="/Login" className="btn btn-gradient-primary rounded-pill font-weight-bold w-100 mb-3">Cadastrar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

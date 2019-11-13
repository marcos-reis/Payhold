import React from 'react';

import Navbar from '../../components/Site/Navbar';
import Footer from '../../components/Site/Footer';

// import { Container } from './styles';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center font-weight-bold my-5 text-grey display-4">Contato</h1>
        <div className="row justify-content-center">
          <div className="col-md-7 col-10">
            <input
              placeholder="Digite aqui seu email "
              className="form-control"
              type="text"
            />
          </div>
          <div className="col-md-7 col-10 text-center">
            <textarea rows="10" className="form-control mt-5" />
            <button type="button" className="btn btn-primary mt-4 mb-5 w-50"><h5>Enviar</h5></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

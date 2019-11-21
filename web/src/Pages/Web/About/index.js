import React from 'react';

import Navbar from '../../../Components/Web/Navbar';
import Footer from '../../../Components/Web/Footer';
// import { Container } from './styles';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 py-5">
        <h1 className="text-center  font-weight-bold text-primary mt-5">O que é a Payhold?</h1>
        <h4 className="mb-5 text-justify mx-sm-3 mx-md-5 px-5 mt-5 font-weight-normal text-grey">
A Payhold é uma plataforma especializada em reembolso,
       nela você pode receber cashback comprando nas lojas parceiras.
       Os valores reembolsados podem ser sacados ou mantidos rendendo 100% do CDI.

        </h4>
      </div>
      <Footer />
    </>
  );
}

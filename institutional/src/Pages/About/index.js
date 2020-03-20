import React from "react";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { ReactComponent as About1 } from "../../Assets/about1.svg";
import { ReactComponent as About2 } from "../../Assets/about2.svg";

import "./style.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 py-5 text-center">
        <section className="row about justify-content-around">
          <div className=" col-lg-5 col-12 order-12 order-lg-1 ">
            <h3 className="text-left font-weight-normal  mt-" style={{ fontSize: "35px" }}>Quem somos?</h3>
            <p
              className="mb-5 text-justify font-weight-lighter text-grey"
              style={{
                fontSize: "20px", lineHeight: "178%", letterSpacing: " 0.07em", color: "#777777",
              }}
            >
        A Payhold é uma plataforma especializada em reembolso,
        nela você pode receber cashback comprando nas lojas parceiras.
        Os valores reembolsados podem ser sacados,
        a qualquer momento após serem disponibilizados pelos nossos parceiros.
            </p>
          </div>
          <div className="col-lg-5 col-12 order-1 d-flex justify-content-center align-items-center ">
            <About1 className="w-75 h-75" />
          </div>
        </section>
        <div className="row justify-content-around my-5">
          <div style={{
            width: "10vw", borderRadius: "5000px", height: "5px", backgroundColor: "#d4d4d4",
          }}
          />
          <div style={{
            width: "30vw", borderRadius: "5000px", height: "5px", backgroundColor: "#d4d4d4",
          }}
          />
          <div style={{
            width: "10vw", borderRadius: "5000px", height: "5px", backgroundColor: "#d4d4d4",
          }}
          />
        </div>
        <section className="row about justify-content-around">
          <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center  ">
            <About2 className="w-75 h-75" />
          </div>
          <div className=" col-lg-5 col-12  ">
            <h3 className="text-left font-weight-normal  mt-5" style={{ fontSize: "35px" }}>Nossa missão</h3>
            <p
              className="mb-5 text-justify font-weight-lighter text-grey"
              style={{
                fontSize: "20px", lineHeight: "178%", letterSpacing: " 0.07em", color: "#777777",
              }}
            >
            Queremos te mostrar uma nova forma de fazer compras online,
            garantido cashback para todas as suas compras com nossos parceiros.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

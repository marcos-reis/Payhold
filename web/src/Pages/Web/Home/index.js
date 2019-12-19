import React, { useState } from "react";
import MaterialIcon from "material-icons-react";
import { isNumber, isUndefined, isNull } from "util";

import Navbar from "../../../Components/Web/Navbar";
import Footer from "../../../Components/Web/Footer";


import apple from "../../../Assets/apple-play-store.png";
import google from "../../../Assets/google-play-store.png";
import shape from "../../../Assets/liquid-shape.png";
import appMobile from "../../../Assets/iPhoneX.png";

import "./style.css";


export default function Home() {
  const [payment, setPayment] = useState("R$ 100,00");
  const [cashBack, setCashBack] = useState("R$ 12,00");
  const [percentOFCash, setPercentOFCash] = useState("12%");

  const formatASNumber = (n) => {
    if (isUndefined(n)) { return 0; }
    if (isNull(n)) { return 0; }
    if (n === "%") { return 0; }
    if (!isNumber(n)) { return parseInt(n.replace(/\D/g, ""), 10) / 100; }
    if (isNumber(n)) { return n / 100; }
  };

  const formatASMoney = (n) => {
    const numberFormated = formatASNumber(n);
    const moneyFormated = numberFormated.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    return moneyFormated;
  };
  const formatASPercentage = (n) => {
    const numberFormated = formatASNumber(n);
    const percentageFormated = numberFormated.toLocaleString("pt-br", { style: "percent" });
    return percentageFormated;
  };

  const calculateCashBack = (v, i) => {
    const valueCashBackFormated = formatASNumber(v);
    const taxaCashBack = formatASNumber(i);
    const result = (valueCashBackFormated * taxaCashBack).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    setCashBack(result);
  };

  const changeState = (setState, State) => {
    setState(State);
    calculateCashBack(payment, percentOFCash);
  };


  return (
    <>

      <Navbar />

      <div className="bg-primary">
        <div className="container-fluid">
          <div className=" row ">
            <div className=" d-flex flex-column col-xl-7 col-lg-7 col-sm align-items-center justify-content-center">
              <div>
                <h2 className="text-light font-weight-bold pt-5 ">
Ganhe cashback nas suas compras online.
                </h2>
                <h3 className="text-light font-weight-light">
Faça seu registro e baixe o nosso app.
                </h3>

                <div>
                  <img className="mt-5 w-25 " alt="Apple Store" src={apple} />
                  <img className="mt-5 w-25" alt="Google Play Store" src={google} />
                </div>
              </div>
            </div>
            <div className="d-lg-flex col d-none flex-column align-items-center justify-content-center">
              <img src={shape} className="w-75" alt="none" />
            </div>
          </div>
        </div>

      </div>
      <div className=" container-lg">
        <article>
          <h2 className="text-gray text-center mt-5 mb-5 font-weight-bold">Como funciona?</h2>
          <p className="text-grey text-justify  mx-md-5 px-md-5 mb-md-5 pb-md-5 font-weight-normal">
Acesse nossa plataforma, crie uma conta,
escolha um parceiro e realize sua compra.
Cada parceiro ofertará um percentual de retorno
em nossa plataforma que pode variar por categorias de produtos.
O valor do cashback poderá ser sacado ou mantidos rendendo 100% do CDI.

          </p>
        </article>
        <div className="row">

          <div className="col-sm-12 col-md">
            <MaterialIcon icon="touch_app" color="#2B6BCB" size="large" />
            <p className="font-weight-light">Acesse nosso app e realize seu login</p>
            <MaterialIcon icon="done" color="#2B6BCB" size="large" />
            <p className="font-weight-light">Escolha o parceiro que está em nossa lista</p>
            <MaterialIcon icon="shopping_cart" color="#2B6BCB" size="large" />
            <p className="font-weight-light">Escolha o produto que deseja e realize sua compra</p>
            <MaterialIcon icon="monetization_on" color="#2B6BCB" size="large" />
            <p className="font-weight-light">Receba o cashback</p>
          </div>
          <div className=" col-sm-12 col-md text-center">


            <img src={appMobile} style={{ width: "300px" }} alt="App Payhold" />

          </div>
        </div>
      </div>


      <div className="py-5" style={{ backgroundColor: "#3C86F6" }}>
        <div className="container">
          <div className="row">
            <div className=" col-md-8 col-lg-7 col-sm-10 col-10 bg-white text-center mx-auto px-sm-5 py-5">
              <h3 className=" px-sm-5 font-weight-bold text-gray text-center">

Veja o total de CashBack
                <br />
concedido em tempo real!
              </h3>
              <h6 className=" text-center px-sm-5 mb-4 font-weight-light">Cashback que retorna para você melhor investir.</h6>
              <div className="border border-primary  ">


                <input
                  onChange={(e) => changeState(setPayment, formatASMoney(e.target.value))}
                  className="font-weight-bold text-grey m-4 noFocus text-center   border-0"
                  onBlur={() => changeState(setPayment, formatASMoney(payment))}
                  style={{ fontSize: 30, width: "200px" }}
                  value={payment}
                />

              </div>
              <div className=" text-center ">
                <p>Digite um percentual de cashback</p>
                <h5 className="font-weight-bold">
Cash:
                  <input
                    onChange={(e) => changeState(setPercentOFCash, formatASPercentage(e.target.value))}
                    className="font-weight-bold bg-dark text-grey noFocus border-0"
                    style={{ width: "50px" }}
                    onBlur={() => changeState(setPercentOFCash, formatASPercentage(percentOFCash))}
                    value={percentOFCash}
                  />

                </h5>

                <h5 className="font-weight-bold">
Retorno:

                  <span className="font-weight-bold ml-2 text-primary">{cashBack}</span>
                </h5>
                <button type="button" className="btn btn-success px-5">Criar sua conta</button>

              </div>

            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}

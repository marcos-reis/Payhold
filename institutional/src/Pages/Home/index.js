import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";


import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


import apple from "../../Assets/apple-play-store.png";
import google from "../../Assets/google-play-store.png";
import shape from "../../Assets/cashback.svg";


import { loadPartners, loadCategoryOfPartners } from "../../constants/mocks";
import { formatASMoney, formatASNumber, formatASPercentage } from "../../constants/formatFuncitions";


import "./style.css";


export default function Home() {
  const [payment, setPayment] = useState(12000);
  const [percentOFCash, setPercentOFCash] = useState(18);
  const [cashBack, setCashBack] = useState(null);
  const [categoryActive, setCategoryActive] = useState("Ecommerce");


  useEffect(() => {
    const calculateCashBack = (v, i) => {
      const valueCashBackFormated = formatASNumber(v);
      const taxaCashBack = formatASNumber(i);
      const result = (valueCashBackFormated * taxaCashBack).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
      setCashBack(result);
    };
    calculateCashBack(payment, percentOFCash);
  }, [payment, percentOFCash]);

  function ListCategoryOfPartners({
    Icon, name,
  }) {
    return (
      <button type="button" id={name} onClick={() => setCategoryActive(name)} className={`card-category ${categoryActive === name ? "card-category-active" : " "}`}>
        <Icon className="category" />
        <p>{name}</p>
      </button>
    );
  }
  function ListPartners({
    logo,
    name,
  }) {
    return (
      <div>
        <img
          src={logo}
          alt={name}
        />
      </div>
    );
  }

  return (
    <>

      <Navbar />
      <main style={{ height: " 90vh" }}>
        <div className=" d-none d-lg-block" />
        <section className="container ">
          <article className=" d-flex delimiter ">
            <div className=" d-flex flex-column col-xl-7 col-lg-7 col-sm align-items-center justify-content-center">
              <div>
                <h2 className="text-light font-weight-bold ">
Ganhe cashback nas suas compras online.
                </h2>
                <h3 className="registerapp">
Faça seu registro gratuitamente agora mesmo.
                </h3>

                <div>
                  <button type="button" className="btn btn-create px-5">Cadastre-se</button>
                </div>
              </div>
            </div>
            <div className=" animation shape d-lg-flex col d-none flex-column align-items-center justify-content-center">
              <img src={shape} className="w-75" alt="Cashback" />
            </div>

          </article>
        </section>
      </main>

      <section className="container">
        <div className=" row ">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <article className="col-md-8 col-12 m-5">
              <h1 style={{ fontSize: "2.60rem" }} className="mb-3 font-weight-bold">
Ganhe cashback em suas compras,

                <br />
saiba como funciona:

              </h1>
              <p className="m-0">
Acesse nossa plataforma, crie uma conta,
escolha um parceiro e realize sua compra.
Cada parceiro ofertará um percentual de retorno
em nossa plataforma que pode variar por categorias de produtos.
Apos receber o cashback em sua conta o valor poderá ser sacado
para a conta bancária que você preferir.

              </p>
            </article>
          </div>
          <div className="step-to-step col-12 row">


            <div>
              <p>1</p>
              <div>
                <MaterialIcon icon="touch_app" />
                <p>
Acesse nosso app e
                  <br />
realize seu login
                </p>
              </div>
            </div>

            <div>
              <p>2</p>
              <div>
                <MaterialIcon icon="done" />
                <p>
Escolha o parceiro que
                  <br />
está em nossa lista
                </p>
              </div>
            </div>
            <div>
              <p>3</p>
              <div>
                <MaterialIcon icon="shopping_cart" />
                <p>
Escolha o produto que deseja
                  <br />
e realize sua compra
                </p>
              </div>
            </div>

            <div>
              <p>4</p>
              <div>
                <MaterialIcon icon="monetization_on" />
                <p>Receba o cashback</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section style={{ backgroundColor: "#2B6BCB" }}>
        <div className="container">
          <div className=" row ">
            <div className="  bg-white text-center mx-auto px-sm-5 py-5 my-5">
              <h3
                style={{ color: "rgb(71, 72, 74)", fontFamily: "Encode Sans " }}
                className=" px-sm-5 font-weight-bold text-center"
              >
 Veja o total de CashBack
 concedido em tempo real!
              </h3>
              <h4 style={{ color: "rgb(71, 72, 74)", fontFamily: "Encode Sans ", fontSize: "16px" }} className=" text-center px-sm-5 mb-4 font-weight-light">Cashback que retorna para você melhor investir.</h4>
              <div className="d-flex mt-5 flex-column justify-content-center align-items-center mx-5 px-5">
                <label style={{ fontSize: "1.5rem" }} className="text-secondary  align-self-start" htmlFor="comprar">Valor da comprar</label>
                <br />
                <input
                  id="comprar"
                  type="range"
                  min={1}
                  max={50000}
                  onChange={(e) => { setPayment(e.target.value); }}
                  className="font-weight-light text-grey mb-4 w-100  custom-range noFocus"
                  value={payment}
                />

                <label className="align-self-end">{formatASMoney(payment)}</label>
                <br />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mx-5 px-5">
                <label style={{ fontSize: "1.5rem" }} className="text-secondary align-self-start" htmlFor="percent">Percentual </label>
                <br />
                <input
                  id="percent"
                  type="range"
                  min={1}
                  max={50}
                  onChange={(e) => { setPercentOFCash(e.target.value); }}
                  className="font-weight-light text-grey noFocus custom-range w-100 mb-4"
                  value={percentOFCash}

                />

                <label className="align-self-end">{formatASPercentage(percentOFCash)}</label>
              </div>
              <div className=" text-center ">

                <h5 style={{ fontSize: "1.4rem", color: "#4D4E4F", fontFamily: "Encode Sans " }} className="font-weight-light">
Retorno :

                  <span style={{ color: "#5A5A5A", fontSize: "2.0rem" }} className="font-weight-bold ml-2 ">{cashBack}</span>
                </h5>


              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="container partners">
        <div className=" row">
          <h4>Nossos parceiros por categoria :</h4>
          <div className="col-12 justify-content-center row mb-3 mt-5">

            {loadCategoryOfPartners.map(
              (categoryOfPartner) => (
                <ListCategoryOfPartners
                  key={categoryOfPartner.id}
                  Icon={categoryOfPartner.icon}
                  name={categoryOfPartner.name}
                />
              ),
            )}

          </div>
          <p style={{ fontSize: "20px" }} className="font-weight-lighter m-0 text-center">
Possuimos mais de
            <span style={{ color: "#2B6BCB" }} className="font-weight-bold"> 100 parceiros</span>
          </p>
          <div
            style={{ overflow: "visible" }}
            className="col-12  mt-3 mb-5 row justify-content-center"
          >
            { loadPartners.map(
              (partner) => partner.category === categoryActive && (
                <ListPartners
                  key={partner.id}
                  logo={partner.logo}
                  name={partner.name}
                />
              ),
            )}


          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

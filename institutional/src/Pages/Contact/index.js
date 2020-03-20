import React, { useState } from "react";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import "./style.css";

export default function ContactOFUser() {
  const [contentEmail, setContentEmail] = useState("");
  const [nameOFUser, setNameOFUser] = useState("");
  const [emailOFUser, setEmailOFUser] = useState("");
  const [subjectOFUser, setSubjectOFUser] = useState("");
  const [isInWhite, setIsInWhite] = useState("");

  function handleSendMail(e) {
    e.preventDefault();
    if (contentEmail && emailOFUser && nameOFUser && subjectOFUser) {
      window.open(`mailto:contato@payhold.com.br?subject=Payhold - ${subjectOFUser} - ${nameOFUser}&body=${contentEmail} %0D%0A %0D%0A %0D%0A Contato: ${emailOFUser}`);
    } else {
      setIsInWhite(true);
      setInterval(() => setIsInWhite(""), 3000);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-10">
            <h1 className="text-center font-weight-bold my-5 text-grey " style={{ fontSize: "35px" }}>Entre em contato com nossa equipe.</h1>
            <h2 className="text-center mb-5 text-grey" style={{ fontSize: "25px" }}>Você tem alguma dúvida? Envie-nos uma mensagem usando o formulário abaixo e alguém da equipe entrará em contato em breve.</h2>
          </div>
        </div>
        <form className="row justify-content-center">
          <div className="col-md-7 col-10 row">
            <input
              onChange={(e) => setNameOFUser(e.target.value)}
              placeholder="Seu nome*"
              className={`form-control col-12 mr-3 ${isInWhite ? "isInWhite" : ""}`}
              type="text"
              value={nameOFUser}
            />
            <input
              onChange={(e) => setEmailOFUser(e.target.value)}
              placeholder="Seu email*"
              className={`form-control col-12 mt-3 ${isInWhite ? "isInWhite" : ""}`}
              type="text"
              value={emailOFUser}
            />
            <input
              onChange={(e) => setSubjectOFUser(e.target.value)}
              placeholder="Assunto*"
              className={`form-control col-12 mt-3 ${isInWhite ? "isInWhite" : ""}`}
              type="text"
              value={subjectOFUser}
            />


            <textarea
              placeholder="Mensagem*"
              onChange={(e) => setContentEmail(e.target.value)}
              rows="6"
              className={`form-control mt-3 ${isInWhite ? "isInWhite" : ""}`}
              value={contentEmail}
            />
            <button
              type="submit"
              onClick={handleSendMail}
              className="btn btn-success mt-3 mb-5 col-12 w-50"
            >
Enviar
            </button>
          </div>
          <div className="col-md-7 col-10 text-center" />

        </form>
      </div>
      <Footer />
    </>
  );
}

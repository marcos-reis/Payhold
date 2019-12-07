import React,{useState} from 'react';

import Navbar from '../../../Components/Web/Navbar';
import Footer from '../../../Components/Web/Footer';

// import { Container } from './styles';

export default function ContactOFUser() {
	const [contentEmail,setContentEmail] = useState('')
	const [nameOFUser,setNameOFUser] = useState('')
	const [contactOFUser,setContactOFUser] = useState(null)
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center font-weight-bold my-5 text-grey display-4">Contato</h1>
        <h4 className="text-center mb-5 text-grey">Dúvidas, sugestões ou  reclamações.</h4>
		<form className="row justify-content-center">
          <div className="col-md-7 col-10 row">
			<input
			  onChange={(e)=>setNameOFUser(e.target.value)}
              placeholder="Name"
              className="form-control col mr-3"
              type="text"
            />
            <input
			  onChange={(e)=>setContactOFUser(e.target.value)}
              placeholder="Telefone"
              className="form-control col"
              type="text"
            />
          </div>
          <div className="col-md-7 col-10 text-center">
            <textarea placeholder="Mensagem" onChange={(e)=>setContentEmail(e.target.value)} rows="10" className="form-control mt-5" />
			<a href={`
			mailto:marcos@payhold.com.br?
			subject=Duvidas,sugestões ou reclamações - ${nameOFUser} - ${contactOFUser} &
			body=${contentEmail}`}
			 target="_newtab" className="btn btn-primary mt-4 mb-5 w-50"><h5>Enviar</h5></a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

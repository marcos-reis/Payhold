import React from 'react';
import MaterialIcon from 'material-icons-react';
// import { Container } from './styles';

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#2B6BCB' }}>
      <div className="container">
        <div className="row py-3">
          <a href="mailto:contato@payhold.com.br" target="_newtab" className="col-6  text-center">
            <MaterialIcon icon="mail_outline" color="#fff" size="60" />
            <p className="text-light">contato@payhold.com.br</p>
          </a>

          <a href="https://api.whatsapp.com/send?phone=+5575991535951" className="col-6  text-center">
            <MaterialIcon icon=" call" color="#fff" size="60" />
            <p className="text-light">(75) 9 9153 - 5951</p>
          </a>

        </div>

      </div>
      <div style={{ backgroundColor: '#3562A5' }} className="col">
        <p style={{ marginBottom: 0 }} className="text-light text-center font-weight-bold py-3 ">© 2019 Payhold Desenvolvido por CodingSoftware</p>
      </div>
    </div>
  );
}

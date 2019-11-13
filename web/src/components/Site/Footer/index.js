import React from 'react';
import MaterialIcon from 'material-icons-react';
// import { Container } from './styles';

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#2B6BCB' }}>
      <div className="container">
        <div className="row py-3">
          <div className="col-6  text-center">
            <MaterialIcon icon="mail_outline" color="#fff" size="60" />
            <p className="text-light">contato@payhold.com.br</p>
          </div>

          <div className="col-6  text-center">
            <MaterialIcon icon=" call" color="#fff" size="60" />
            <p className="text-light">(75) 9 0000 - 0000</p>
          </div>

        </div>

      </div>
      <div style={{ backgroundColor: '#3562A5' }} className="col">
        <p style={{ marginBottom: 0 }} className="text-light text-center font-weight-bold py-3 ">© 2019 Payhold Desenvolvido por CodingSoftware</p>
      </div>
    </div>
  );
}

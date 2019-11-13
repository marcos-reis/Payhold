import React from 'react';

import amazon from '../../assets/amazon.png';

import './style.css';

export default function Partners({ categorias, desc }) {
  return (
    <div className="mt-5 overflow-auto partner bg-grey position-fixed vh-100 flex-column">

      <div className=" mt-5 text-center ">
        <img src={amazon} alt="Amazon" />
      </div>
      <div className="w-50 mt-5 mx-auto text-justify">

        <span className=" text-light font-weight-bold  ">
          {desc}
        </span>
      </div>
      <div className="container">
        <div className="row">
          {categorias.map((v) => (
            <div key={v.categoria} className="col-6 text-center mt-5 text-light">
              <span className="mr-2">{v.categoria}</span>
              <span>{v.percentage}</span>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

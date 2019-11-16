import React from 'react';

import amazon from '../../assets/amazon.png';

import './style.css';

export default function Partners({ categories, descricao,thumbnail,name }) {
  return (
    <div className="mt-5 overflow-auto partner bg-grey position-fixed vh-100 flex-column">

      <div className=" mt-5 text-center ">
        <img src={thumbnail} style={{width:"400px"}} alt={name} />
      </div>
      <div className="w-50 mt-5 mx-auto text-justify">

        <span className=" text-light font-weight-bold  ">
          {descricao}
        </span>
      </div>
      <div className="container">
        <div className="row">
          {categories.map((v) => (
            <div key={v.category} className="col-6 text-center mt-5 text-light">
              <span className="mr-2">{v.category}</span>
              <span>{v.percentage}</span>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

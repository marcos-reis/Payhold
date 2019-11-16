import React from 'react';

import './style.css';

export default function Partners({ categories, descricao,thumbnail,name,url }) {
  return (
    <div style={{zIndex:1}} className="mt-5 overflow-auto partner bg-grey position-fixed vh-100 flex-column">

      <div className=" mt-5 text-center  ">
        <img className=" col-8 col-md-6" src={thumbnail}  alt={name} />
        <a href={url}>{name}</a>
      </div>
      <div className=" mt-5 mx-auto text-justify  col-10 col-md-8">

        <span className=" text-light font-weight-bold  ">
          {descricao}
        </span>
      </div>
      <div className="container">
        <div className="row">
          {categories.map((v) => (
            <div key={v.category} className="col text-center mt-5 text-light">
              <span className="mr-2">{v.category}</span>
              <span>{v.percentage}</span>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

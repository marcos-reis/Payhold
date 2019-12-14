import React from "react";

// import { Container } from './styles';

export default function Featured({
  thumbnail, id, name, percentage,
}) {
  return (
    <div style={{ borderRadius: " 20px 20px 20px 20px", cursor: "pointer" }} className=" mx-4 mt-5 bg-primary d-flex flex-column ">
      <img style={{ borderRadius: " 10px 10px 0 0", width: "250px" }} src={thumbnail} alt={name} />
      <span className="text-center font-weight-bold text-light">
        {`Até ${percentage}% de volta`}
      </span>
    </div>
  );
}

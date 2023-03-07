import React from "react";
import "./styles.css";

const Componente1 = () => {
  const name = "jose silva";
  const elemento1 = <> Alo, {name} </>;

  return (
    <>
      {" "}
      <h3> Fatec ZL </h3>
      <p> {elemento1}</p>
    </>
  );
};
export default Componente1;

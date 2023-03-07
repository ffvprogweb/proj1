import React from "react";

const Componente3 = (props) => {
  const p1 = parseInt(props.parcela1);
  const p2 = parseInt(props.parcela2);

  const saldo = parseInt(p1 + p2);

  return (
    <div>
      <h3> Soma</h3>
      <p>
        {" "}
        <strong> Parcela 1: </strong> {p1}
      </p>
      <p>
        {" "}
        <strong> Parcela 2: </strong> {p2}
      </p>
      <p>
        {" "}
        <strong> Soma </strong> {saldo}
      </p>
    </div>
  );
};
export default Componente3;

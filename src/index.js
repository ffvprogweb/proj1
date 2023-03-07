import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Componente1 from "./componentes/Componente1";
import Componente2 from "./componentes/Componente2";
import Componente3 from "./componentes/Componente3";
import Card from "./componentes/Card";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card titulo="Fundamentos react">
      <Componente1 />
    </Card>
    <Componente2 name="Jose" tool="eclipse" />
    <Componente3 parcela1={5} parcela2={2} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { render, screen } from "@testing-library/react";
import Componente1 from "./componentes/Componente1";

test("ct01 - verifica a apresentacao do texto Fatec ZL", () => {
  //dado que o componente foi instanciado
  render(<Componente1 />);
  //quando consultar o texto
  const txtElement = screen.getByText(/fatec/i);
  //entao o texto será localizado na pagina
  expect(txtElement).toBeInTheDocument();
});

test("ct02 - verifica a apresentacao do texto Jose Silva", () => {
  //dado que o componente foi instanciado
  render(<Componente1 />);
  //quando consultar o texto
  const txtElement = screen.getByText(/jose/i);
  //entao o texto será localizado na pagina
  expect(txtElement).toBeInTheDocument();
});

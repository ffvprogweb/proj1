const Componente2 = (props) => {
  const name = props.name;
  const tool = props.tool;

  return (
    <div>
      <h3> Passando parametros</h3>
      <p> Meu nome é - {name}.</p>
      <p> Minha ferramenta de design favorita é {tool}. </p>
    </div>
  );
};
export default Componente2;

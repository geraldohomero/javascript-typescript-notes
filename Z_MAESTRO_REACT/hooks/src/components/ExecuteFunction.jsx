import PropTypes from 'prop-types';

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui</button>
    </div>
  )
}

ExecuteFunction.propTypes = {
  myFunction: PropTypes.func.isRequired,
};

export default ExecuteFunction

{/*

As funções podem ser passadas para as props de um componente e executadas
Basta criar a função no componente pai e passar como prop para o componente

No componente filho ela pode ser executada por um evento, como o onClick

*/}
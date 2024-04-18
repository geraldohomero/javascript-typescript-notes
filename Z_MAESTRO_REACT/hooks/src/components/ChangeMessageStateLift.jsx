
// eslint-disable-next-line react/prop-types
const ChangeMessageStateLift = ({ handleMessage }) => {
  const messages = [
    "Mensagem 1",
    "Mensagem 2",
    "Mensagem 3",
    "Mensagem 4"
  ];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
      <button onClick={() => handleMessage(messages[3])}>4</button>
    </div>
  );
};
export default ChangeMessageStateLift
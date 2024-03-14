const Challenge = () => {
  const number = 91283;
  const number2 = 7;

  return (
    <div>
      <p>Número 1: {number}</p>
      <p>Número 2: {number2}</p>
      <button onClick={() => console.log(number + number2)}>Faça a soma!</button>
    </div>
  );
}

export default Challenge;
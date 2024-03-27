import { useState } from 'react'

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(100);

  console.log(number);

  return (
    <div>
      <h1>Manage Data</h1>
      <h2>Valor: {someData}</h2>
      <button onClick={() => (someData = 14)}>Mudar variável</button>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(25)}>Mudar o state</button>
    </div>
  )
}

export default ManageData

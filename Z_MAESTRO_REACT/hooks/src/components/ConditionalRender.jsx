import { useState } from 'react'


const ConditionalRender = () => {

  const [x] = useState(false);
  const [name, setName] = useState("Jeremias")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <h2>Sim</h2>}
      {!x && <h2>Não</h2>}
      <h1> If ternário</h1>
      {name === "Valdermeirsson" ? (
        <div>
          <h2>Olá Valdermeirsson</h2>
        </div>
      ) : (
        <div>
          <h2>Olá estranho</h2>
        </div>
      )}
      {/* Re-renderização dos componentes */}
      <button onClick={() => setName("Valdermeirsson")}>Clica Aqui</button>
    </div>
  )
}


export default ConditionalRender;

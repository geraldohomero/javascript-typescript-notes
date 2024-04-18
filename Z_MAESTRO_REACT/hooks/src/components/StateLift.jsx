const StateLift = (msg) => {
  return (
    <div>
      A mensagem é: {msg.msg}
    </div>
  )
}

export default StateLift

{/* 
Elevação de estado ou State lift é quando um valor é 
elevado do componente filho para o componente pai

Geralmente podemos ter um componente que usa o state
e outro que vai alterá-lo. Então devemos passar essa alteração 
para o componente pai, e este passa para o componente que usa o state

*/}
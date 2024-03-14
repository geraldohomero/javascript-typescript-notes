const Events = () => {
  const handleMyEvent = (e) => (
    console.log(e),
    console.log('Clicou no botão!')
  );

  const renderSomething = (x) => {
    if (x) {
      return <h1>Render 1</h1>
    } else {
      return <h>Render 2</h>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        {/* função inLine boa para quando é algo mais simples
            quando começa a ficar complexo melhor retirar a função
            para melhorar sua legibilidade*/}
        <button onMouseOver={() => console.log('Mouse Over!')}>Passe o mouse aqui!</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events
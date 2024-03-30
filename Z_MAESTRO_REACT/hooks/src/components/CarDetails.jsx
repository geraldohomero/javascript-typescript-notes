const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h3>Detalhes do carro</h3>
      <ul>
        <li>Cor: {color}</li>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
      </ul>
      {newCar && <p>Este carro é novo</p>}

    </div>
  )
}

export default CarDetails
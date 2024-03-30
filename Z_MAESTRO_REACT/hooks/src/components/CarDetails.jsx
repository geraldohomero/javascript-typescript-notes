const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h3>Detalhes do carro</h3>
      <ul>
        <li>Cor: {color}</li>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
      </ul>

    </div>
  )
}

export default CarDetails
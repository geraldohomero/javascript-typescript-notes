import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const name = 'Jorvinelson'
  return (
    <div>
      <h1>Hooks</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      {/* destructuring */}
      <CarDetails brand="VW" km={90000} color="branco" newCar={false} />
      {/* reaproveitando componentes */}
      <CarDetails brand="Ford" km={120000} color="preto" newCar={false} />
      <CarDetails brand="Chevrolet" km={0} color="prata" newCar={true} />

    </div>
  )
}

export default App

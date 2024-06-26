import './App.css'
import { useState } from 'react';
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import StateLift from './components/StateLift'
import ChangeMessageStateLift from './components/ChangeMessageStateLift'
import UserDetails from './components/UserDetails'
function App() {
  const name = 'Jorvinelson';

  const cars = [
    { id: 1, brand: "Ferrari", km: 1000, color: "red", newCar: true },
    { id: 2, brand: "Porsche", km: 2000, color: "yellow", newCar: false },
    { id: 3, brand: "Lamborghini", km: 3000, color: "green", newCar: true },
    { id: 4, brand: "Aston Martin", km: 4000, color: "blue", newCar: false },
    { id: 5, brand: "Bugatti", km: 5000, color: "black", newCar: true }
  ]



  function showMessage() {
    console.log("Executa componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Jorvinelson", job: "Programador", age: 30 },
    { id: 2, name: "Maria", job: "Designer", age: 25 },
    { id: 3, name: "João", job: "Estudante", age: 12 },
    { id: 4, name: "José", job: "Médico", age: 40 },
    { id: 5, name: "Ana", job: "Advogada", age: 45 }
  ]


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
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar} />
      ))}

      {/* fragment */}
      <Fragments propFragment="teste" />
      {/* children */}
      <Container myValue="teste">
        {/* Como fazer com que caso queira colocar um componente logo abaixo?
        Devemos desestruturar o componente Container.jsx */}
        <p>Conteúdo</p>
      </Container>
      <Container myValue="teste2">
        <p>Conteúdo</p>
      </Container>
      {/* chexecutar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <StateLift msg={message} />
      <ChangeMessageStateLift handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  )
}

export default App

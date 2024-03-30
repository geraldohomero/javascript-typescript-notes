import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'

function App() {
  const name = 'Jorvinelson'
  return (
    <div>
      <h1>Hooks</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
    </div>
  )
}

export default App

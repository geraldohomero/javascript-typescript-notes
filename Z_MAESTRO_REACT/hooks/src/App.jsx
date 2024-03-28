import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'

function App() {

  return (
    <div>
      <h1>Hooks</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName />
    </div>
  )
}

export default App

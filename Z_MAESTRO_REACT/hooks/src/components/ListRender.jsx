import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Wellerson", "Joberson", "Killerson", "Emmanuellerson"])

  const [users] = useState([
    { id: 1, name: "Wellerson", age: 25 },
    { id: 2, name: "Joberson", age: 26 },
    { id: 3, name: "Killerson", age: 27 },
    { id: 4, name: "Emmanuellerson", age: 28 },
  ]);
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        )))}
      </ul>
    </div >
  )
}

export default ListRender

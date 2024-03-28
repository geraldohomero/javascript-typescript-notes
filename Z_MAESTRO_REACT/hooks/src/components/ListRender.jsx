import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Wellerson", "Joberson", "Killerson", "Emmanuellerson"])

  const [users, setUsers] = useState([
    { id: 1, name: "Wellerson", age: 25 },
    { id: 2, name: "Joberson", age: 26 },
    { id: 3, name: "Killerson", age: 27 },
    { id: 4, name: "Emmanuellerson", age: 28 },
  ]);
  {/* previous state */ }
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    })
    console.log(randomNumber)
    console.log(users.length)
  }
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
      <button onClick={deleteRandom}>Delete random user</button>
    </div >
  )
}

export default ListRender

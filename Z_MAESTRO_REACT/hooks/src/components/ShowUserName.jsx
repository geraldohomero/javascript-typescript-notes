
const ShowUserName = (props) => {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <h1>O nome do usuário é: {props.name}</h1>
    </div>
  )
}

export default ShowUserName
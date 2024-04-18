// eslint-disable-next-line react/prop-types
const Container = ({ children, myValue }) => {
  return (
    <div>
      <h1>Título do container</h1>
      {children}
      <p>O valor é &quot;{myValue}&quot;</p>
    </div>
  )
}

export default Container
const TemplateExpressions = () => {
  const name = 'Josh Perezinskywkyski';
  const data = {
    age: 22,
    job: 'developer',
    company: 'Google'
  }

  return (
    <div>
      <h1>Hello, {name} </h1>
      <h2>You are a {data.job}?</h2>
      <p>Do you work at {data.company}?</p>
    </div >
  )

}
export default TemplateExpressions;
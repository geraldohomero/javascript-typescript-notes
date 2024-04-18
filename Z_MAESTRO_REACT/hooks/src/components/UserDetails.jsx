
import PropTypes from 'prop-types';

const UserDetails = ({ age, name, job }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (
        <p>Pode dirigir</p>
      ) : (
        <p>Não pode dirigir</p>)}

    </div>
  )
}

UserDetails.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default UserDetails

import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form(handleSubmit, handleChange, novaTarefa) {
  return (
      <form onSubmit={handleSubmit} action="#" className="form">
        <input 
          onChange={handleChange} 
          type="text"
          value={novaTarefa}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
  );
}
//Caso o campo novaTarefa não seja preenchido, ele será uma string vazia por padrão
//caso ele for obrigatório
//Form.defaultProps = {
//  novaTarefa: '',
//}
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}


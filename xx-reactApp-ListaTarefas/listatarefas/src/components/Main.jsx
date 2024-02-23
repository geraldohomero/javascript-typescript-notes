// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

//form
import { FaPlus } from 'react-icons/fa';

//tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefas: [
      'tomar café',
      'estudar',
      'trabalhar',
    ],
  };

    handleChange = (evento) => {
      this.setState({ 
        novaTarefa: evento.target.value 
      });
  }
  
  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className = "main">
        <h1>Lista de Tarefas</h1>
        <form action="#" className="form">
          <input 
          onChange={this.handleChange} 
          type="text"
          value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className='edit'/>
                <FaWindowClose className='delete'/>
              </div>
              </li>
          ))}
        </ul>

      </div>
    );
  }
}
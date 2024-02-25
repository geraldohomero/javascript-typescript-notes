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
    tarefas: [],
  };

    handleSubmit = (e) => {
      e.preventDefalt();
      const { tarefas } = this.state;
      let { novaTarefa } = this.state;
      novaTarefa = novaTarefa.trim();

      if (tarefas.indexOf(novaTarefa) !== -1) return;

      const novasTarefas = [...tarefas];

      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
      });
    }    

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
        <form onSubmit={this.handleSubmit} action="#" className="form">
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
              <span>
                <FaEdit className='edit'/>
                <FaWindowClose className='delete'/>
              </span>
              </li>
          ))}
        </ul>

      </div>
    );
  }
}
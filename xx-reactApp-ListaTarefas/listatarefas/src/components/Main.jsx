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
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
    this.setState({ novaTarefa: '' }); // limpa o input
  }   

    handleChange = (e) => {
      this.setState({ 
        novaTarefa: e.target.value 
      });
  }
  
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    
    this.setState({ 
      tarefas: [...novasTarefas] 
    });
  }

  handleEdit = (e, index) => {
    console.log('Edit', index)
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
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit 
                  onClick={(e) => this.handleEdit(e, index)}
                  className='edit'
                />
                <FaWindowClose 
                  onClick={(e) => this.handleDelete(e, index)} 
                  className='delete'
                />
              </span>
              </li>
          ))}
        </ul>

      </div>
    );
  }
}
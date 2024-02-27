// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';
import './Main.css';

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas })
  }

  // pega todas as atualizações vindas dos componentes
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
  // quando as tarefas mudarem: salvar no localStorage
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({ 
        tarefas: [...novasTarefas], 
        index: -1
      });
    }
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
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    }); 
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className = "main">
        <h1>Lista de Tarefas</h1>
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novasTarefas={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}

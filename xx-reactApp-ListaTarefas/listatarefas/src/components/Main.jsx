// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.inputMudou = this.inputMudou.bind(this);
    }

    inputMudou = (evento) => {
      this.setState({ 
        novaTarefa: evento.target.value 
      });
  }
  
  render() {
    return (
      <div className = "main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input onChange={this.inputMudou} type="text" />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}
import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key ={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'ir para a academia', 'tomar banho', 'estudar']

export default class App extends Component {
  render() {
    return(
      <ul>{ tarefas.map((tarefa) => Task(tarefa))}</ul>
    )
  }
}
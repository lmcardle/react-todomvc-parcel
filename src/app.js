import React, { Component } from 'react';
import './index.css';

import TodosProvider from './components/TodosProvider';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter'

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodosProvider>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </TodosProvider>
      </section>
    );
  }
}
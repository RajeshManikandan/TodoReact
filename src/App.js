import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList/todoList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <TodoList />
            </div>
        );
    }
}

export default App;

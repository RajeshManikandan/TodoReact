import React, { Component } from 'react';
import './style.css';
import ListElement from './listElement';
class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }
    addList = e => {
        if (this._inputElement.value !== '') {
            const newList = {
                key: Date.now(),
                text: this._inputElement.value
            };
            const list = this.state.list;
            this._inputElement.value = '';
            list.push(newList);
            this.setState({ list });
        }
        e.preventDefault();
    };

    removeElement = id => {
        let list = this.state.list.filter(li => li.key !== id);
        console.log(list);
        this.setState({ list });
    };

    render() {
        return (
            <div className="todoList">
                <form onSubmit={this.addList}>
                    <input ref={a => (this._inputElement = a)} id="todo" placeholder="Enter Here.." />
                    <button id="add">Add</button>
                    <ListElement list={this.state.list} delete={this.removeElement} />
                </form>
            </div>
        );
    }
}

export default TodoList;

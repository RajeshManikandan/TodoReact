import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ListElement extends Component {
    state = {};

    getElement = list => (
        <li key={list.key} onClick={() => this.props.delete(list.key)}>
            {list.text}
        </li>
    );

    render() {
        return (
            <ul>
                <FlipMove duration={150} easing="ease-out">
                    {this.props.list.map(list => this.getElement(list))}
                </FlipMove>
            </ul>
        );
    }
}

export default ListElement;

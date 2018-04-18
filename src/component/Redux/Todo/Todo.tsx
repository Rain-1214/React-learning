import * as React from 'react';

export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoPropsType extends TodoType {
  onClick: () => void;
}

class Todo extends React.Component<TodoPropsType> {

  render () {
    return (
      <li
        onClick={this.props.onClick}
        key={this.props.id}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}>
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
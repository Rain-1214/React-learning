import Todo, { TodoType } from '../Todo/Todo';
import * as React from 'react';

interface TodoListProps {
  todos: TodoType[];
  onTodoClick: (id: number) => void;
}

class TodoList extends React.Component<TodoListProps> {

  render () {
    return (
      <ul>
        {this.props.todos.map((todo: TodoType, index: number) => (
          <Todo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
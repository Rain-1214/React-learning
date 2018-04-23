import Todo, { TodoType } from '../Todo/Todo';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface TodoListProps extends RouteComponentProps<{ filter: string}> {
  todos?: TodoType[];
  onTodoClick?: (id: number) => void;
}

class TodoList extends React.Component<TodoListProps> {

  render () {
    return (
      <ul>
        {(this.props.todos as TodoType[]).map((todo: TodoType, index: number) => (
          <Todo key={index} {...todo} onClick={() => (this.props.onTodoClick as Function)(index)} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
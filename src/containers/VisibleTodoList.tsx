import { connect } from 'react-redux';
import { toggleTodo } from '../store/action';
import TodoList from '../component/Redux/TodoList/TodoList';

// tslint:disable-next-line:no-any
const getVisibleTodos = (todos: any, filter: any) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      // tslint:disable-next-line:no-any
      return todos.filter((t: any) => t.completed);
    case 'SHOW_ACTIVE':
      // tslint:disable-next-line:no-any
      return todos.filter((t: any) => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

// tslint:disable-next-line:no-any
const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any) => {
  return {
    // tslint:disable-next-line:no-any
    onTodoClick: (id: any) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
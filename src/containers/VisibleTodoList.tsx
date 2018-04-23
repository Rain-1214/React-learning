import { StoreStateType } from '../store';
import { TodoType } from '../component/Redux/Todo/Todo';
import { Dispatch, connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Action } from 'redux';
import { toggleTodo } from '../store/action';
import TodoList, { TodoListProps } from '../component/Redux/TodoList/TodoList';

export enum ShowType {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMLETED = 'SHOW_COMLETED'
}

const getCurrentVisTodo = (todos: TodoType[], visibilityType: string) => {
  switch (visibilityType) {
    case ShowType.SHOW_ACTIVE:
      return todos.filter(e => !e.completed);
    case ShowType.SHOW_COMLETED:
      return todos.filter(e => e.completed);
    case ShowType.SHOW_ALL:
    default: return todos;
  }
};

interface TodosMapStateReturnType {
  todos?: TodoType[];
}

const mapStateToProps: MapStateToProps<TodosMapStateReturnType, TodoListProps, StoreStateType> = (state, props) => {
  return {
    todos: getCurrentVisTodo(state.todos, props.match.params.filter as string)
  };
};

interface TodosMapDispatchReturnType {
  onTodoClick?: (id: number) => void;
}

const mapDispatchToProps: MapDispatchToProps<TodosMapDispatchReturnType, null> = (dispatch: Dispatch<Action>) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    }
  };
};

const visibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default visibleTodoList;
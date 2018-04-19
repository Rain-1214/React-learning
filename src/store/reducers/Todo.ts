import { TodoType } from '../../component/Redux/Todo/Todo';
import { AddTodoActionType, ToggleTodoType, Types } from '../action/actionTypes';
import { Reducer } from 'redux';

const todos: Reducer<TodoType[]> = (state: TodoType[] = [], action: AddTodoActionType | ToggleTodoType): TodoType[] => {
  switch (action.type) {
    case Types.ADD_TODO: 
     return [
       ...state,
       {
         id: action.id,
         completed: false,
         text: (action as AddTodoActionType).text
       }
     ];
    case Types.TOGGLE_TODO:
     return state.map((todo: TodoType, index: number) => {
      return { ...todo, completed: action.id === todo.id ? todo.completed : todo.completed };
     });
    default: return state;
  }
};

export default todos;
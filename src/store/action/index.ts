import { AddTodoActionType, SetVisFilterType, ToggleTodoType, Types } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text: string): AddTodoActionType => {
  return {
    type: Types.ADD_TODO,
    id: nextTodoId++,
    text,
  };
};

export const setVisibilityFilter = (filter: string): SetVisFilterType => {
  return {
    type: Types.SET_VISIBILITY_FILTER,
    filter,
  };
};

export const toggleTodo = (id: number): ToggleTodoType => {
  return {
    type: Types.TOGGLE_TODO,
    id,
  };
};
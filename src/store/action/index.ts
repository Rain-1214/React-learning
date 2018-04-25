import { AddTodoActionType, SetVisFilterType, ToggleTodoType, Types, AddCountType } from './actionTypes';

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

export const addCount = (id: string, num: number): AddCountType => {
  return {
    type: Types.ADD_COUNT,
    id,
    num
  };
};
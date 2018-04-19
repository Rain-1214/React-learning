interface BaseType {
  type: string;
}

export const Types = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

export interface AddTodoActionType extends BaseType {
  id: number;
  text: string;
}

export interface SetVisFilterType extends BaseType {
  filter: string;
}

export interface ToggleTodoType extends BaseType {
  id: number;
}
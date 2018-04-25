interface BaseType {
  type: string;
}

export const Types = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
  ADD_COUNT: 'ADD_COUNT'
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

export interface LoginActionType extends BaseType {
  username: string;
}

export interface LoginSuccessActionType extends BaseType {
  userRole: string;
}

export interface AddCountType extends BaseType {
  id: string;
  num: number;
}
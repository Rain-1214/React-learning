import { TodoType } from '../component/Redux/Todo/Todo';

export interface TodoStateType {
  todos: TodoType[];
}

export interface VisFilterStateType {
  setVisibilityFilter: string;
}

export interface LoginStateType {
  user: {
    username: string;
    userRole: string;
  };
}

export interface LoginCopyStateType {
  userCopy: string;
}

export interface CountStateType {
  count: {
    [key: string]: number
  };
}

export interface StoreStateType extends TodoStateType, VisFilterStateType, LoginStateType, LoginCopyStateType
                                        , CountStateType {}
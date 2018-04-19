import { TodoType } from '../component/Redux/Todo/Todo';

interface TodoStateType {
  todos: TodoType[];
}

interface VisFilterStateType {
  setVisibilityFilter: string;
}

export interface StoreStateType extends TodoStateType, VisFilterStateType {}
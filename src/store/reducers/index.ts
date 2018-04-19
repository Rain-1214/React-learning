import { combineReducers } from 'redux';
import todos from './Todo';
import setVisibilityFilter from './setVisibilityFilter';

const TodoApp = combineReducers({
  todos,
  setVisibilityFilter,
});

export default TodoApp;
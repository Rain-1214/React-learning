import { combineReducers } from 'redux';
import todos from './Todo';
import setVisibilityFilter from './setVisibilityFilter';
import user from './login';
import userCopy from './loginCopy';

const TodoApp = combineReducers({
  todos,
  setVisibilityFilter,
  userCopy,
  user,
});

export default TodoApp;
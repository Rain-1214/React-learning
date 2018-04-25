import { combineReducers } from 'redux';
import todos from './Todo';
import setVisibilityFilter from './setVisibilityFilter';
import user from './login';
import userCopy from './loginCopy';
import count from './count';

const TodoApp = combineReducers({
  todos,
  setVisibilityFilter,
  userCopy,
  user,
  count
});

export default TodoApp;
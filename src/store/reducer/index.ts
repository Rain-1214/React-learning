import { combineReducers } from "redux";
import { user } from "./user/userReducer";
import handleError from './common/handleError/handleErrorReducer';

const rootReducer = combineReducers({
  user,
  handleError
})

export default rootReducer;
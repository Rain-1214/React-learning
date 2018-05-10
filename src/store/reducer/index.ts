import { combineReducers } from "redux";
import { user } from "./user/userReducer";
import handleError from './common/handleError/handleErrorReducer';
import student from "./student/studentReducer";

const rootReducer = combineReducers({
  user,
  handleError,
  student
})

export default rootReducer;
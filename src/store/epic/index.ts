import { combineEpics } from "redux-observable";
import userEpic from "./user/userEpic";
import studentEpic from "./student/studentEpic";

const rootEpic = combineEpics(
  userEpic,
  studentEpic
)

export default rootEpic;
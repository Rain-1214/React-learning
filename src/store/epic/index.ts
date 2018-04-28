import { combineEpics } from "redux-observable";
import userEpic from "./user/userEpic";

const rootEpic = combineEpics(
  userEpic
)

export default rootEpic;
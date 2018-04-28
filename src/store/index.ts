import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epic";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
)

export default store;


import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epic";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

const epicMiddleware = createEpicMiddleware(rootEpic);
const createStoreFactory = () => createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware),
)
export default createStoreFactory;


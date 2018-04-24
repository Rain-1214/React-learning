import { Middleware, Action } from 'redux';
import { Dispatch } from 'react-redux';

// tslint:disable-next-line:no-any
const logger: Middleware = (store: any) => (next: Dispatch<Action>) => (action: any): any => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
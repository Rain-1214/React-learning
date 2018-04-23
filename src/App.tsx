import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './store/reducers';
import AddTodo from './containers/AddTodo';
import VisibleTodoList, { ShowType } from './containers/VisibleTodoList';
import Footer from './component/Redux/Footer/Footer';
import logger from './store/middleware/Logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const stroe = createStore(
  todoApp,
  applyMiddleware(
    logger,
    thunk
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={stroe}>
        <Router>
          <div>
            <AddTodo />
            <hr/>
            <Route exact={true} path="/" render={(props) => (
               <Redirect to={{
                 pathname: `/${ShowType.SHOW_ALL}`,
                 state: { from: props.location }
               }} />
            )}/>
            <Route path="/:filter" render={(props) => {
              return (
                <div>
                  <Footer {...props} />
                  <VisibleTodoList {...props} />
                </div>
              );
            }} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

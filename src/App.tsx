import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './store/reducers';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './component/Redux/Footer/Footer';
import logger from './store/middleware/Logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const stroe = createStore(
  todoApp,
  applyMiddleware(logger)
);
class App extends React.Component {
  render() {
    return (
      <Provider store={stroe}>
        <Router>
          <Route path="/(:filter)" render={() => (
            <div>
              <AddTodo />
              <VisibleTodoList />
              <Footer />
            </div>
          )} />
        </Router>
      </Provider>
    );
  }
}

export default App;

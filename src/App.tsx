import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './store/reducers';
import AddTodo from './containers/AddTodo';
import VisibleTodoList, { ShowType } from './containers/VisibleTodoList';
import Footer from './component/Redux/Footer/Footer';
import logger from './store/middleware/Logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import UserContainers from './containers/user';
import Count from './containers/Count';

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
            <hr/>
            <Link to="/user">user</Link>
            <br/>
            <Link to="/count">count</Link>
            <hr/>
            <Route path="/user" component={UserContainers} />
            <Route path="/count" render={() => (
              <div>
                <Count id="a" />
                <Count id="b" />  
              </div>
            )} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

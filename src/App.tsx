import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './store/reducers';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './component/Redux/Footer/Footer';

const stroe = createStore(todoApp);
class App extends React.Component {
  render() {
    return (
      <Provider store={stroe}>
        <div>
          hello
          <br/>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

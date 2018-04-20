import { connect, DispatchProp, Dispatch } from 'react-redux';
import * as React from 'react';
import { addTodo } from '../store/action';
import { Action } from 'redux';

interface AddTodoState {
  value: string;
}

class AddTodoComponent extends React.Component<DispatchProp<Action>, AddTodoState> {

  state = {
    value: ''
  };

  constructor (props: DispatchProp<Action>) {
    super(props);
    this.inputValueChange = this.inputValueChange.bind(this);
    this.submitTodoText = this.submitTodoText.bind(this);
  }

  inputValueChange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({
      value,
    });
  }

  submitTodoText (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    (this.props.dispatch as Dispatch<Action>)(addTodo(this.state.value));
    this.setState({
      value: ''
    });
  }

  componentWillMount() {
    console.log('AddTodo', this.props);
  }

  render () {

    return (
      <div>
        <form>
          <input type="text" placeholder="input todo text" value={this.state.value} onChange={this.inputValueChange} />
          <button onClick={this.submitTodoText}>Add Todo</button>
        </form>
      </div>
    );
  }
}

const AddTodo = connect()(AddTodoComponent);

export default AddTodo;
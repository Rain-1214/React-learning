import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/action';

// tslint:disable-next-line:no-any
let AddTodo: any = ({ dispatch }: any) => {
  // tslint:disable-next-line:no-any
  let input: any;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
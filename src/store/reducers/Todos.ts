import { TodoType } from '../../component/Redux/Todo/Todo';

interface ActionType {
  id?: number;
  type?: string;
  text?: string;
}

const todos = (state: TodoType[] = [], action: ActionType) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          type: action.type,
          text: action.text,
          complete: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo: TodoType, index: number) => (
        (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
      ));
    default: return state;
  }
};

export default todos;
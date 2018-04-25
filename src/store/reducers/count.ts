import { AddCountType, Types } from '../action/actionTypes';

const countDefault = {
  '1': 0
};

const count = (state = countDefault, action: AddCountType) => {
  switch (action.type) {
    case Types.ADD_COUNT:
      return Object.assign({}, state, {
        [action.id]: state[action.id] ? state[action.id] + action.num : action.num
      });
    default: return state;
  }
};

export default count;
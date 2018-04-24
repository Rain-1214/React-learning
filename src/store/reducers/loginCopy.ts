import { LoginActionType, Types } from '../action/actionTypes';

const userCopy = (state: string = 'Copy', action: LoginActionType) => {
  switch (action.type) {
    case Types.USER_LOGIN: 
     return `Copy: ${action.username}`;
    default: return state;
  }
};

export default userCopy;
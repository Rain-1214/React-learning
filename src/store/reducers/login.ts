import { LoginActionType, LoginSuccessActionType, Types } from '../action/actionTypes';

const defaultUser = {username: 'username', userRole: 'userRole'};

const user = (state = defaultUser , action: LoginActionType | LoginSuccessActionType) => {
  switch (action.type) {
    case Types.USER_LOGIN: 
      return Object.assign({}, state, {
        username: (action as LoginActionType).username
      });
    case Types.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        userRole: (action as LoginSuccessActionType).userRole
      });
    default: return state;
  }
};

export default user;
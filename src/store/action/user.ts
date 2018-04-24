import { Types, LoginActionType, LoginSuccessActionType } from './actionTypes';
import { Dispatch } from 'react-redux';
import { Action } from 'history';
import UserService from '../../api/user';

const loginBeforeSend = (username: string): LoginActionType => {
  return {
    type: Types.USER_LOGIN,
    username,
  };
};

export const loginSuccess = (userRole: string): LoginSuccessActionType => {
  return {
    type: Types.USER_LOGIN_SUCCESS,
    userRole,
  };
};

export const login = (username: string, password: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loginBeforeSend(username));
    return UserService.login(username, password).then(res => {
      dispatch(loginSuccess(res.data.data ? res.data.data.userRole : res.data.message));
    });
  };
};

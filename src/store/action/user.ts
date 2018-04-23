import { Types, LoginActionType, LoginSuccessActionType } from './actionTypes';
import { Dispatch } from 'react-redux';
import { Action } from 'history';
import UserService from '../../api/user';

export const login = (username: string, password: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loginBeforeSend(username));
    return UserService.login(username, password).then(res => {
      dispatch(loginSuccess(res.data.userRole));
    });
  };
};

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
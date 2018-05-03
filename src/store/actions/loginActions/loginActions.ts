import { ILoginActionType, ILoginSuccessActionType, ILoginFailActionType } from "./loginActions.type";
import { ActionsTypes } from "../allActionsType";

export const loginAction = (username: string, password: string): ILoginActionType => {
  return {
    type: ActionsTypes.USER_LOGIN,
    username,
    password,
  }
} 

export const loginSuccessAction = (username: string, userRole: string): ILoginSuccessActionType => {
  return {
    type: ActionsTypes.USER_LOGIN_SUCCESS,
    username,
    userRole,
  }
}

export const loginFailAction = (errorMessage: string): ILoginFailActionType => {
  return {
    type: ActionsTypes.USER_LOGIN_FAIL,
    errorMessage,
    time: new Date().getTime()
  }
}
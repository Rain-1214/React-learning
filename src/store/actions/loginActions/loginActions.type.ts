import { Action } from "redux";

export interface ILoginActionType extends Action {
  username: string;
  password: string;
}

export interface ILoginSuccessActionType extends Action {
  username: string;
  userRole: string;
}

export interface ILoginFailActionType extends Action {
  errorMessage: string;
}
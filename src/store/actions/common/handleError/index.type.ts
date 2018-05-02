import { Action } from "redux";

export interface IHandleErrorActionType extends Action {
  errorType: string;
  errorMessage: string;
}
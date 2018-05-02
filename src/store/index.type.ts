import { IUserState } from "./reducer/user/userReducer.type";
import { IHandleErrorState } from './reducer/common/handleError/handleError.type';

export interface IStoreUserState {
  user: IUserState
}

export interface IStoreHandleErrorState {
  handleError: IHandleErrorState
}

export interface IStoreState extends IStoreUserState, IStoreHandleErrorState {}
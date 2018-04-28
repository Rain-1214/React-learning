import { IUserState } from "./reducer/user/userReducer.type";

export interface IStoreUserState {
  user: IUserState
}

export interface IStoreState extends IStoreUserState {}
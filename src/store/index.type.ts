import { IUserState } from "./reducer/user/userReducer.type";
import { IHandleErrorState } from "./reducer/common/handleError/handleErrorReducer.type";
import { IStudentState } from "./reducer/student/studentReducer.type";

export interface IStoreUserState {
  user: IUserState
}

export interface IStoreHandleErrorState {
  handleError: IHandleErrorState
}

export interface IStoreStudentState {
  student: IStudentState
}

export interface IStoreState extends IStoreUserState, IStoreHandleErrorState, IStoreStudentState {}
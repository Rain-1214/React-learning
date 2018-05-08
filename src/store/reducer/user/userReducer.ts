import { Reducer } from "redux";
import { IUserState } from "./userReducer.type";
import { ILoginSuccessActionType, ILoginFailActionType } from "../../actions/loginActions/loginActions.type";
import { ActionsTypes } from "../../actions/allActionsType";

const defaultUserState: IUserState = {
  isLogin: false,
  username: '',
  userRole: '',
  loginErrorMessage: '',
  loginTime: 0
}

export const user: Reducer = (state: IUserState = defaultUserState, action: ILoginSuccessActionType | ILoginFailActionType) => {
  switch (action.type) {
    case ActionsTypes.USER_LOGIN_SUCCESS: 
      return {
        ...state,
        isLogin: true,
        username: (action as ILoginSuccessActionType).username,
        userRole: (action as ILoginSuccessActionType).userRole
      }
    case ActionsTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loginErrorMessage: (action as ILoginFailActionType).errorMessage,
        loginTime: (action as ILoginFailActionType).time
      }
    default: return state;
  }
}
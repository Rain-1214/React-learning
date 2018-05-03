import { Epic } from "redux-observable";
import { ILoginActionType } from "../../actions/loginActions/loginActions.type";
import { Action } from "redux";
import { IStoreState } from "../../index.type";
import { ActionsTypes } from "../../actions/allActionsType";
import { loginSuccessAction } from "../../actions/loginActions/loginActions";
import { loginFailAction } from './../../actions/loginActions/loginActions';
import UserService from "../../../api/user/userService";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

const userEpic: Epic<Action, IStoreState> = (action$, store) => {
  return action$.ofType(ActionsTypes.USER_LOGIN)
                .switchMap((action: ILoginActionType) => {
                  return UserService.login(action.username, action.password)
                         .map(res => (
                           res.data.stateCode === 1 ?
                            loginSuccessAction(action.username, res.data.data.userRole) :
                            loginFailAction(res.data.message)
                         ))
                })
}

export default userEpic;
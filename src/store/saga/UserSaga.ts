import UserService, { AjaxReturn } from '../../api/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LoginFullActionType, Types } from '../action/actionTypes';
import { AxiosResponse } from 'axios';
import { loginSuccess } from '../action/user';

function* user (action: LoginFullActionType) {
  try {
    const data: AxiosResponse<AjaxReturn<{ userRole: string; }>> =
     yield call(UserService.login, action.username, action.password);
    yield put(loginSuccess(data.data.data.userRole));
  } catch (e) {
    yield put({type: Types.USER_LOGIN_FAIL, e});
  }
}

function* mySaga () {
  yield takeLatest(Types.USER_LOGIN, user);
}

export default mySaga;
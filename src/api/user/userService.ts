import { Observable } from "rxjs/Observable";
import axios, { AxiosResponse } from 'axios';
import { IAjaxReturn, IUserAndUserCountNum } from "../index.type";

import 'rxjs/add/observable/fromPromise';

class UserService {

  public static login (username: string, password: string): Observable<AxiosResponse<IAjaxReturn<{ userRole: string; }>>> {
    return Observable.fromPromise(axios.post('/api/user/login',  { username, password }))
  }

  public static logout (): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.get('/api/user/logout'));
  }

  public static checkUsernameCanUse (username: string): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/checkUsername', { username }))
  }

  public static getVerificationCode (email: string): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/getEmailCode', { email }))
  }

  public static register (username: string, password: string, email: string, code: string): Observable<AxiosResponse<IAjaxReturn<{ userRole: string }>>> {
    return Observable.fromPromise(axios.put('/api/user/register', { username, password, email, code }))
  }

  public static getUser (page: number, itemNumber: number): Observable<AxiosResponse<IAjaxReturn<IUserAndUserCountNum>>> {
    return Observable.fromPromise(axios.get('/api/user/getUser', { params: { page, itemNumber } }))
  }

  public static forgetPassword (username: string): Observable<AxiosResponse<IAjaxReturn<string>>> {
    return Observable.fromPromise(axios.post('/api/user/forgetPass', { username }));
    
  }

  public static checkForgetPassCode (code: string): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/checkForgetPassCode', { code }));
  }

  public static setNewPass (password: string): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/setNewPass', { password }))
  }

  public static checkUsername (username: string): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/checkUsername', { username }))
  }

  public static leaveUpUser (): Observable<AxiosResponse<IAjaxReturn<{ newAuth: string }>>> {
    return Observable.fromPromise(axios.post('/api/user/leaveUpUser'));
  }

  public static deactiveUser (userId: number): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/disableUser', { userId }));
  }

  public static activeUser (userId: number): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/activeUser', { userId }))
  }

}

export default UserService;
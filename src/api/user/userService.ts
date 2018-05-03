import { Observable } from "rxjs/Observable";
import axios, { AxiosResponse } from 'axios';

import 'rxjs/add/observable/fromPromise';
import { IAjaxReturn } from "../index.type";

class UserService {

  public static login (username: string, password: string): Observable<AxiosResponse<IAjaxReturn<{ userRole: string; }>>> {
    return Observable.fromPromise(axios.post('/api/user/login',  { username, password }))
  }

  public static checkUsernameCanUse (username: string): Observable<AxiosResponse<IAjaxReturn<null>>> {
    return Observable.fromPromise(axios.post('/api/user/checkUsername', { username }))
  }

}

export default UserService;
import { Observable } from "rxjs/Observable";
import axios, { AxiosResponse } from 'axios';

import 'rxjs/add/observable/fromPromise';
import { IAjaxReturn } from "../index.type";

class UserService {

  public static login (username: string, password: string): Observable<AxiosResponse<IAjaxReturn<{ userRole: string; }>>> {
    return Observable.fromPromise(axios.post('/api/user/login',  { username, password }))
  }

}

export default UserService;
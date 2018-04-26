import axios, { AxiosResponse } from 'axios';

export interface AjaxReturn<T> {
  message: 'string';
  stateCode: number;
  data: T;
}

class UserService {

  static login (username: string, password: string): Promise<AxiosResponse<AjaxReturn<{userRole: string}>>> {
    return axios.post('/api/user/login', {username, password});
  }

}

export default UserService;
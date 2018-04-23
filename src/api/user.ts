import axios, { AxiosResponse } from 'axios';

class UserService {

  static login (username: string, password: string): Promise<AxiosResponse<{ userRole: string }>> {
    return axios.post<{userRole: string}>('/api/user/login', {username, password});
  }

}

export default UserService;
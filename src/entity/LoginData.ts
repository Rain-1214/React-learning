
export default class LoginData {

  static isLogin: boolean = false;

  static login (cb?: Function) {
    this.isLogin = true;
    setTimeout(cb, 100);
  }

  static logout (cb?: Function) {
    this.isLogin = false;
    setTimeout(cb, 100);
  }

}

export interface ILoginContainerMapDispatchType {
  loginDispatch: (username: string, password: string) => void;
}

export interface ILoginContainerMapStateType {
  isLogin: boolean;
  loginErrorMessage: string;
  loginTime: number;
}
import { User } from "../entity/user";

export interface IAjaxReturn<T> {
  stateCode: number;
  message: string;
  data: T
}

export interface IUserAndUserCountNum  {
  users: User[]
  userCountNumber: number
}



export interface IAjaxReturn<T> {
  stateCode: number;
  message: string;
  data: T
}
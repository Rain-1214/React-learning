import { FormComponentProps } from "antd/lib/form";

export interface IForgetPasswordProps extends FormComponentProps {

}

export interface IForgetPasswordState {
  step: number;
  emailAddress: string;
  btnLoadingFlag: boolean;
}
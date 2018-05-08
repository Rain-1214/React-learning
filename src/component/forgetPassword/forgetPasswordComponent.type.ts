import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router";

export interface IForgetPasswordProps extends FormComponentProps, RouteComponentProps<null> {

}

export interface IForgetPasswordState {
  step: number;
  emailAddress: string;
  btnLoadingFlag: boolean;
}
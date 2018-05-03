import { FormComponentProps } from "antd/lib/form/Form";
import { ILoginContainerMapDispatchType, ILoginContainerMapStateType } from "../../containers/login/loginContainer.type";
import { RouteComponentProps } from "react-router";

export interface ILoginComponentProps extends FormComponentProps, ILoginContainerMapDispatchType, ILoginContainerMapStateType
                                              , RouteComponentProps<null> {                                                
}

export interface ILoginFormTypes {
  username: string;
  password: string;
}
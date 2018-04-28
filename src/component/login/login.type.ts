import { FormComponentProps } from "antd/lib/form/Form";
import { ILoginContainerMapDispatchType } from "../../containers/login/loginContainer.type";

export interface ILoginComponentProps extends FormComponentProps, ILoginContainerMapDispatchType {
}
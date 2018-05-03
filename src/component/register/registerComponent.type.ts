
import { FormComponentProps } from 'antd/lib/form/Form';

export interface IRegisterComponentProps extends FormComponentProps {}

export interface IRegisterComponentState {
  usernameCanUser: boolean;
}
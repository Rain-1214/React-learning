
import { FormComponentProps } from 'antd/lib/form/Form';
import { IRegisterContainerMapDispatch } from '../../containers/register/registerContainer.type';
import { RouteComponentProps } from 'react-router';

export interface IRegisterComponentProps extends FormComponentProps, IRegisterContainerMapDispatch, RouteComponentProps<null> {}

export interface IRegisterComponentState {
  registerLoading: boolean;
  verificationText: string;
  verificationButtonDisable: boolean;
}

export interface IRegisterForm {
  username: string;
  password: string;
  passwordAgain: string;
  email: string;
  code: string;
}
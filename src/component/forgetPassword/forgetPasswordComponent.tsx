import * as React from "react";
// import CommonStyle from '../../assets/sass/common.module.scss';
import ComponentStyle from '../../assets/sass/component.module.scss';
import ForgetPasswordStyle from './forgetPassword.module.scss';
import { Form, Input, Icon, Button, message } from "antd";
import Center from "../common/center/center";
import { IForgetPasswordProps, IForgetPasswordState } from "./forgetPasswordComponent.type";
import UserService from "../../api/user/userService";

enum StepType {
  INPUTE_USERNAME = 1,
  CHECK_VERIFICATION_CODE = 2,
  SET_NEW_PASSWORD = 3
}

class ForgetPasswordComponent extends React.Component<IForgetPasswordProps, IForgetPasswordState> {

  public state: IForgetPasswordState = {
    step: StepType.INPUTE_USERNAME,
    emailAddress: '',
    btnLoadingFlag: false
  }

  constructor(props: IForgetPasswordProps) {
    super(props);
    this.submitUsername = this.submitUsername.bind(this);
  }

  public submitUsername () {
    this.props.form.validateFields(['username'], async (error: any, value: { username: string }) => {
      if (!error) {
        this.setState({
          btnLoadingFlag: true
        })
        const res = await UserService.forgetPassword(value.username).toPromise();
        if (res.data.stateCode === 1) {
          this.setState({
            emailAddress: res.data.data,
            step: this.state.step + 1
          })
        } else {
          message.error(res.data.message)
        }
        this.setState({
          btnLoadingFlag: false
        })
      }
    })
  }

  public checkStringSafe (rule: any, value: string, callback: (arg?: any) => any) {
    if (/\W+/.test(value)) {
      callback(new Error('only can user number、letters and underline'))
    }
    callback()
  }

  public clearPasswordAgain () {
    this.props.form.resetFields(['passwordAgain']);
  }

  public checkPasswordConsistent (rule: any, value: string, callback: (arg?: any) => any) {
    const password = this.props.form.getFieldValue('password');
    if (value !== password) {
      callback(new Error('Inconsistent password input twice'))
    } else {
      callback()
    }
  }

  public render() {
    const showStep = () => {
      switch (this.state.step) {
        case StepType.CHECK_VERIFICATION_CODE:
          return (
            <div>
              <h2>已经向您账号所绑定的邮箱{this.state.emailAddress}发送验证码，请到邮箱查看</h2>
              <Form.Item>
                {
                  this.props.form.getFieldDecorator('code', {
                    rules: [
                      { required: true, message: 'please input your username!!!' }
                    ]
                  })(
                    <Input prefix={(<Icon type="safety" />)} placeholder="Verification Code" />
                  )
                }
              </Form.Item>
              <div>
                <Button type="primary">
                  提交
                </Button>
              </div>
            </div>
          );
        case StepType.SET_NEW_PASSWORD:
          return (
            <div>
              <h2>请设定新密码</h2>
              <Form.Item>
                {
                  this.props.form.getFieldDecorator('password', {
                    rules: [
                      { required: true, message: 'please input your password'},
                      { max: 16, message: 'Up to 16 characters' },
                      { min: 6, message: 'The shortest is not less than 6 characters' },
                      { validator: this.checkStringSafe.bind(this) }
                    ]
                  })(
                    <Input prefix={(<Icon type="lock" />)} placeholder="Password" type="password" />
                  )
                }
              </Form.Item>
              <Form.Item>
                {
                  this.props.form.getFieldDecorator('passwordAgain', {
                    rules: [
                      { required: true, message: 'please input your password, Again'},
                      { validator: this.checkPasswordConsistent.bind(this) }
                    ]
                  })(
                    <Input prefix={(<Icon type="lock" />)} placeholder="Password" type="password" />
                  )
                }
              </Form.Item>
              <div>
                <Button type="primary">
                  提交
                </Button>
              </div>
            </div>
          );
        default: 
          return (
            <div>
              <h2>请填写您的用户名</h2>
              <Form.Item>
                {
                  this.props.form.getFieldDecorator('username', {
                    rules: [
                      { required: true, message: 'please input your username!!!' }
                    ]
                  })(
                    <Input prefix={(<Icon type="user" />)} placeholder="username" />
                  )
                }
              </Form.Item>
              <div>
                <Button type="primary" onClick={this.submitUsername}>
                  提交
                </Button>
              </div>
            </div>
          );
      }
    }
    
    return (
      <div className={`${ComponentStyle.userLayout} ${ForgetPasswordStyle.forgetPasswordWrapper}`}>
        <Form>
          <Center centerDirection={ComponentStyle.formWrapper}>
            { showStep() }            
          </Center>
        </Form>
      </div>
    )
  }
}

export default Form.create()(ForgetPasswordComponent);
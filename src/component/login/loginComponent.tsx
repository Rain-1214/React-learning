import * as React from "react";
import Center from "../common/center/center";
import ComponentStyle from '../../assets/sass/component.module.scss';
import CommonStyle from '../../assets/sass/common.module.scss';
import { Form, Input, Icon, Button, Alert } from 'antd';
import { Link } from "react-router-dom";
import { ILoginComponentProps, ILoginFormTypes, ILoginComponentState } from './loginComponent.type';

class LoginComponent extends React.Component<ILoginComponentProps, ILoginComponentState> {

  public state: ILoginComponentState = {
    btnLoadingFlag: false
  }

  public componentWillReceiveProps(nextProps: ILoginComponentProps) {
    if (nextProps.isLogin) {
      this.props.history.push('/student')
    } else {
      if (this.state.btnLoadingFlag) {
        this.setState({
          btnLoadingFlag: false
        })
      }
    }
  }

  public handleSubmit = () => {
    this.props.form.validateFields((error, value: ILoginFormTypes) => {
      if (!error) {
        this.setState({
          btnLoadingFlag: true
        })
        this.props.loginDispatch(value.username, value.password);
      }
    });
  }

  public createErrorAlert() {
    if (this.props.loginErrorMessage !== '') {
      return (<Alert message={this.props.loginErrorMessage} type="error" showIcon={true} closable={true} key={this.props.loginTime} />)
    }
    return null;
  }

  public render () {

    return (
      <div className={ComponentStyle.userLayout}>
        <Center centerDirection={ComponentStyle.formWrapper}>
          <h2 className={CommonStyle.textCenter}>登录</h2>
          <Form>
            { this.createErrorAlert() }
            <Form.Item>
              {this.props.form.getFieldDecorator('username', {
                rules: [{ required: true, message: 'please input you username!!!' }]
              })(
                <Input prefix={(<Icon type="user" />)} placeholder='Username' />
              )}
            </Form.Item>
            <Form.Item>
              {
                this.props.form.getFieldDecorator('password',{
                  rules: [{ required: true, message: 'please input you password!!!'}]
                })(
                  <Input prefix={(<Icon type="lock" />)} type="password" placeholder="Password" />
                )
              }
            </Form.Item>
            <p className={`${CommonStyle.textRight} ${CommonStyle.fontSizeSm}`}>
              <Link to="/forgetPassword">Forget Password</Link> or <Link to="/register">Register Now</Link>
            </p>
            <Button type="primary" 
                    onClick={this.handleSubmit}
                    className={CommonStyle.btnBlock}
                    loading={this.state.btnLoadingFlag}
                    disabled={this.state.btnLoadingFlag}>Log in</Button>
          </Form>
        </Center>
      </div>
    )
  }
}

export default Form.create()(LoginComponent);
import * as React from "react";
import Center from "../common/center/center";
import ComponentStyle from '../../assets/sass/component.module.scss';
import CommonStyle from '../../assets/sass/common.module.scss';
import { Form, Input, Icon, Button } from 'antd';
import { Link } from "react-router-dom";
import { ILoginComponentProps } from "./login.type";

class LoginComponent extends React.Component<ILoginComponentProps> {

  public componentWillMount () {
    // tslint:disable-next-line:no-console
    console.log(this.props);
  }

  public handleSubmit = () => {
    // const formData = this.props.form.validateFields();
  }

  public render () {

    return (
      <div className={ComponentStyle.userLayout}>
        <Center centerDirection={ComponentStyle.formWrapper}>
          <h2 className={CommonStyle.textCenter}>登录</h2>
          <Form>
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
            <Button type="primary" onClick={this.handleSubmit} className={CommonStyle.btnBlock}>Log in</Button>
          </Form>
        </Center>
      </div>
    )
  }
}

export default Form.create()(LoginComponent);
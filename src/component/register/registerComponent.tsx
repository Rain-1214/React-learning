
import * as React from 'react';
import Center from './../common/center/center';
import ComponentStyle from '../../assets/sass/component.module.scss';
import CommonStyle from '../../assets/sass/common.module.scss';
import { Form, Input, Icon, Row, Col, Button } from 'antd';
import { IRegisterComponentProps } from './registerComponent.type';
import UserService from './../../api/user/userService';

class RegisterComponent extends React.Component<IRegisterComponentProps> {

  public async checkUsernameCanUse(rule: any, value: string, callback: (arg?: any) => void) {
    const res = await UserService.checkUsernameCanUse(value).toPromise();
    if (res.data.stateCode !== 1) {
      callback(new Error(res.data.message))
    } else {
      callback();
    }
  }

  public checkStringSafe (rule: any, value: string, callback: (arg?: any) => any) {
    if (/\W+/.test(value)) {
      callback(new Error('only can user number、letters and underline'))
    }
  }

  public checkPasswordConsistent (rule: any, value: string, callback: (arg?: any) => any) {
    const password = this.props.form.getFieldValue('password');
    if (value !== password) {
      callback(new Error('Inconsistent password input twice'))
    } else {
      callback()
    }
  }

  public render () {

    return (
      <div className={ComponentStyle.userLayout}>
        <Center centerDirection={ComponentStyle.formWrapper}>
          <h2 className={CommonStyle.textCenter}>注册</h2>
          <Form>
            <Form.Item>
              {
                this.props.form.getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'please input your username!!!' },
                    { max: 16, message: 'Up to 16 characters' },
                    { min: 6, message: 'The shortest is not less than 6 characters' },
                    { pattern: /^\w+$/, message: 'only can user number、letters and underline' },
                    { validator: this.checkUsernameCanUse.bind(this) }
                  ]
                })(
                  <Input prefix={(<Icon type="user" />)} placeholder='Username' />
                )
              }
            </Form.Item>
              
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
                    { required: true, message: 'please input your password'},
                    { validator: this.checkPasswordConsistent.bind(this) }
                  ]
                })(
                  <Input prefix={(<Icon type="lock" />)} placeholder="Password Again" type="password" />
                )
              }
            </Form.Item>

            <Form.Item>
              {
                this.props.form.getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'please input your email!!!' },
                    { pattern: /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)+$/ }
                  ]
                })(
                  <Input prefix={(<Icon type="mail" />)} placeholder="email" type="password" />
                )
              }
            </Form.Item>

            <Form.Item>
              <Row>
                <Col span={16}>
                  {
                    this.props.form.getFieldDecorator('verificationCode', {
                      rules: [
                        { required: true, message: 'please input your verification code' }
                      ]
                    })(
                      <Input prefix={(<Icon type="safety" />)} placeholder="Verification Code" />
                    )
                  }
                </Col>
                <Col span={8} className={CommonStyle.textRight}>
                  <Button type="primary">获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>
              
          </Form>
        </Center>
      </div>
    )
  }

}

export default Form.create()(RegisterComponent)
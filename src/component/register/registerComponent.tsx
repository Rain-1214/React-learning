
import * as React from 'react';
import Center from './../common/center/center';
import ComponentStyle from '../../assets/sass/component.module.scss';
import CommonStyle from '../../assets/sass/common.module.scss';
import { Form, Input, Icon, Row, Col, Button, message } from 'antd';
import { IRegisterComponentProps, IRegisterComponentState, IRegisterForm } from './registerComponent.type';
import UserService from './../../api/user/userService';
import { Link } from 'react-router-dom';

class RegisterComponent extends React.Component<IRegisterComponentProps, IRegisterComponentState> {

  public state = {
    verificationButtonDisable: false,
    verificationText: '获取验证码',
    registerLoading: false
  }

  private timerId = -1;
  private getEmailCodeInterval = 60;
  
  constructor (props: IRegisterComponentProps) {
    super(props);
    this.getVerificationCode = this.getVerificationCode.bind(this);
    this.clearPasswordAgain = this.clearPasswordAgain.bind(this);
    this.register = this.register.bind(this);
  }

  public componentDidMount () {
    const sessionGetEmailCodeInterval = sessionStorage.getItem('getEmailCodeInterval');
    if (sessionGetEmailCodeInterval) {
      this.getEmailCodeInterval = Number.parseInt(sessionGetEmailCodeInterval, 10);
      this.setState({
        verificationButtonDisable: true
      })
      this.refreshVerificationText();
    }
  }

  public register () {
    if (this.state.registerLoading) {
      return;
    }
    this.props.form.validateFields(async (error, values: IRegisterForm) => {
      if (!error) {
        this.setState({
          registerLoading: true
        });
        const { username } = values;
        const res = await UserService.register(values.username, values.password, values.email, values.code).toPromise();
        if (res.data.stateCode === 1) {
          const userRole = res.data.data.userRole;
          this.props.registerSuccess(username, userRole);
          message.success('注册成功，即将自动登录并跳转');
          setTimeout(() => {
            this.props.history.push('/student');
          }, 2000)
        } else {
          message.error(res.data.message);
          this.setState({
            registerLoading: false
          })
        }
      }

    });
  }

  public getVerificationCode() {
    this.setState({
      verificationButtonDisable: true
    });
    this.props.form.validateFields(['email'], {}, async (error, value) => {
      if (!error) {
        const res = await UserService.getVerificationCode(value.email).toPromise();
        if (res.data.stateCode === 1) {
          message.success('发送成功，请到邮箱查看');
          this.refreshVerificationText();
        } else {
          message.error(res.data.message)
          this.setState({
            verificationButtonDisable: false
          })
        }
      } else {
        this.setState({
          verificationButtonDisable: false
        })
      }
    });
  }

  public refreshVerificationText () {
    this.timerId = window.setInterval(() => {
      if (this.getEmailCodeInterval <= 0) {
        this.getEmailCodeInterval = 60;
        clearInterval(this.timerId);
        sessionStorage.removeItem('getEmailCodeInterval');
        this.setState({
          verificationButtonDisable: false,
          verificationText: '重新获取'
        })
        return;
      }
      this.setState({
        verificationText: `${this.getEmailCodeInterval--}s后重试`
      })
      sessionStorage.setItem('getEmailCodeInterval', this.getEmailCodeInterval.toString());
    }, 1000)
  }

  public checkUsernameCanUse = () => {
    this.props.form.validateFields(['username'], async (error, value: { username: string }) => {
      const res = await UserService.checkUsernameCanUse(value.username).toPromise();
      if (res.data.stateCode !== 1) {
        this.props.form.setFields({
          username: {
            value: value.username,
            errors: [
              new Error(res.data.message)
            ]
          }
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

  public render () {

    return (
      <div className={ComponentStyle.userLayout}>
        <Center centerDirection={ComponentStyle.formWrapper}>
          <div>
            <Link to="/login"><Icon type="left" /> back</Link>
          </div>
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
                  ]
                })(
                  <Input prefix={(<Icon type="user" />)} placeholder='Username' onBlur={this.checkUsernameCanUse} />
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
                  <Input prefix={(<Icon type="lock" />)} placeholder="Password" type="password" onChange={this.clearPasswordAgain} />
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
                  <Input prefix={(<Icon type="lock" />)} placeholder="Password Again" type="password" />
                )
              }
            </Form.Item>

            <Form.Item>
              {
                this.props.form.getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'please input your email!!!' },
                    { pattern: /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)+$/, message: 'invalid email address' }
                  ],
                  validateTrigger: 'onBlur'
                })(
                  <Input prefix={(<Icon type="mail" />)} placeholder="email" />
                )
              }
            </Form.Item>

            <Form.Item>
              <Row>
                <Col span={16}>
                  {
                    this.props.form.getFieldDecorator('code', {
                      rules: [
                        { required: true, message: 'please input your verification code' }
                      ]
                    })(
                      <Input prefix={(<Icon type="safety" />)} placeholder="Verification Code" />
                    )
                  }
                </Col>
                <Col span={8} className={CommonStyle.textRight}>
                  <Button type="primary" onClick={this.getVerificationCode} disabled={this.state.verificationButtonDisable}>{this.state.verificationText}</Button>
                </Col>
              </Row>
            </Form.Item>

            <div>
              <Button className={CommonStyle.btnBlock} type="primary" loading={this.state.registerLoading} onClick={this.register}>
                提交
              </Button>
            </div>
              
          </Form>
        </Center>
      </div>
    )
  }

}

export default Form.create()(RegisterComponent)
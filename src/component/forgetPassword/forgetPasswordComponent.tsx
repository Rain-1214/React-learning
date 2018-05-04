import * as React from "react";
import CommonStyle from '../../assets/sass/common.module.scss';
import ComponentStyle from '../../assets/sass/component.module.scss';
import { Form } from "antd";
import Center from "../common/center/center";

class ForgetPasswordComponent extends React.Component {

  public render() {
    
    return (
      <div className={ComponentStyle.userLayout}>
        <Form>
          <Center centerDirection={ComponentStyle.formWrapper}>
            <h2 className={CommonStyle.textCenter}>请输入您的用户名</h2>
            
          </Center>
        </Form>
      </div>
    )
  }
}

export default ForgetPasswordComponent;
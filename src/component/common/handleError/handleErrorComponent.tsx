import * as React from "react";
import { notification } from "antd";
import { IHandleErrorProps } from "./handleErrorComponent.type";

class HandleErrorComponent extends React.Component<IHandleErrorProps> {

  public componentWillReceiveProps (nextProps: IHandleErrorProps) {
    // tslint:disable-next-line:no-console
    console.log(nextProps);
    if (nextProps.errorMessage !== '') {
      notification.warn({
        message: '有一个错误',
        description: nextProps.errorMessage,
        duration: 3
      })
    }
  }

  public render () {
    return null;
  }

}

export default HandleErrorComponent;
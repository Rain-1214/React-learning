import * as React from "react";
import { IPrivateRouteProps } from "./privateRouteComponent.type";
import { Redirect } from "react-router";

class PrivateRouteComponent extends React.Component<IPrivateRouteProps> {

  public render () {
    
    return this.props.isLogin ? <this.props.component /> : <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
  }
}

export default PrivateRouteComponent;
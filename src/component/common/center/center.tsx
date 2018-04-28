import * as React from "react";
import { ICenterProps } from "./center.type";
import './center.scss';

class Center extends React.Component<ICenterProps> {

  constructor (props: ICenterProps) {
    super(props);
  }

  public render () {
    const bgColor = this.props.bgColor || '#fff';
    const centerDirection = this.props.centerDirection || 'all-center';
    return (
      <div className={centerDirection} style={{
        backgroundColor: bgColor
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default Center;
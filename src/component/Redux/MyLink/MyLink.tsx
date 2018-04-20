import * as React from 'react';
import { Link } from 'react-router-dom';  

export interface MyLinkType {
  children?: React.ReactChild;
  active?: boolean;
  filter: string;
  onClick?: () => void;
}

class MyLink extends React.Component<MyLinkType> {

  render () {
    if (this.props.active) {
      return (
        <span>{this.props.children}</span>
      );
    }

    return (
      <Link to={`/${this.props.filter}`}>
        {this.props.children}
      </Link>
    );
  }
}

export default MyLink;
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';  

export interface MyLinkType extends RouteComponentProps<{ filter: string }> {
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
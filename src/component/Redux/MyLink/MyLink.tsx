import * as React from 'react';

interface MyLinkType {
  active: boolean;
  onClick: () => void;
}

class MyLink extends React.Component<MyLinkType> {

  render () {
    if (this.props.active) {
      return (
        <span>{this.props.children}</span>
      );
    }

    return (
      <a href=""
        onClick={(event) => {
          event.preventDefault();
          this.props.onClick();
        }}>
        {this.props.children}
      </a>
    );
  }
}

export default MyLink;
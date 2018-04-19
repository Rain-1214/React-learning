import * as React from 'react';

export interface MyLinkType {
  children?: React.ReactChild;
  active?: boolean;
  filter: string;
  onClick?: () => void;
}

// class MyLink extends React.Component<MyLinkType> {

//   render () {
//     if (this.props.active) {
//       return (
//         <span>{this.props.children}</span>
//       );
//     }

//     return (
//       <a href=""
//         onClick={(event) => {
//           event.preventDefault();
//           this.props.onClick();
//         }}>
//         {this.props.children}
//       </a>
//     );
//   }
// }

const MyLink = (props: MyLinkType) => {
  if (props.active) {
    return (
      <span>{props.children}</span>
    );
  }

  return (
    <a href=""
      onClick={(event) => {
        event.preventDefault();
        (props.onClick as Function)();
      }}>
      {props.children}
    </a>
  );
};

export default MyLink;
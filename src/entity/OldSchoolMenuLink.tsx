import * as React from 'react';
import { Route, Link } from 'react-router-dom';

interface OldSchoolMenuLinkProp {
  to: string;
  activeOnlyWhenExact: boolean;
  label: string;
}

class OldSchoolMenuLink extends React.Component<OldSchoolMenuLinkProp> {

  render () {
    return (
      <Route path={this.props.to} exact={this.props.activeOnlyWhenExact} children={(props) => (
        <div className={props.match ? 'active' : ''}>
          {props.match ? '>' : ''}<Link to={this.props.to}>{this.props.label}</Link>
        </div>
      )} />
    );
  }
}

export default OldSchoolMenuLink;
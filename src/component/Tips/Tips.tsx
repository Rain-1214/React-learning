import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, RouteComponentProps, Route } from 'react-router-dom';
import Bundle from '../../entity/Bundle';

const AsyncTip = (props: RouteComponentProps<null>) => (
  <Bundle {...props} load={import('./Tip')} loading={() => ( <div>Loading...</div> )} />
);

class Tips extends React.Component<RouteComponentProps<null>> {

  componentWillMount() {
    console.log(this.props.location);
  }

  render () {
    return (
      <Route render={({location, match}) => (
        <div>
          <h1>
            This is Tips Page!
          </h1>
          <ul>
            <li>
              <Link to={`${match.url}/hello`}>tips hello</Link>
            </li>
            <li>
              <Link to={`${match.url}/world`}>tips world</Link>
            </li>
          </ul>
          <div className="parent">
            <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
              <Route location={location} key={location.key} path={`${match.url}/:message`} component={AsyncTip} />
            </ReactCSSTransitionGroup>
          </div>
        </div>
      )} />
    );
  }
}

export default Tips;
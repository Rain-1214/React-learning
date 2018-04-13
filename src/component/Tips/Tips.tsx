import * as React from 'react';
// import * as Loadable from 'react-loadable';
import { Link, RouteComponentProps, Route } from 'react-router-dom';
import Bundle from '../../entity/Bundle';
// import Tip from './Tip';
// const Tip = Loadable({
//   loader: () => import('./Tip'),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });

const AsyncTip = (props: object) => (
  <Bundle load={() => import('./Tip')} />
);

class Tips extends React.Component<RouteComponentProps<{}>> {

  componentWillMount () {
    console.log(this.props);
  }

  render () {
    return (
      <div>
        <h1>
          This is Tips Page!
        </h1>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/hello`}>tips hello</Link>
          </li>
        </ul>
        <Route path={`${this.props.match.url}/:message`} component={AsyncTip} />
        <Route exact={true} path={`${this.props.match.url}`} render={() => (
          <h1>select a Tip</h1>
        )} />
      </div>
    );
  }
}

export default Tips;
import * as React from 'react';
import { RouteComponentProps, Link, Route } from 'react-router-dom';
import UserData from '../../entity/UserData';

class Person extends React.Component<RouteComponentProps<{id: number}>> {
  
  // tslint:disable-next-line:no-any
  render (): any {
    const id = +this.props.match.params.id;
    const currentPerson = UserData.findPersonById(id);
    return (
      <div>
        <h2>{currentPerson.name}'s Friend</h2>
        <ul>
          {currentPerson.friends.map(e => (
            <li key={e}>
              <Link to={`${this.props.match.url}/${e}`}>
                {UserData.findPersonById(e).name}
              </Link>
            </li>
          ))}
        </ul>
        <Route path={`${this.props.match.url}/:id`} component={Person} />
      </div>
    );
  }
}

export default Person;
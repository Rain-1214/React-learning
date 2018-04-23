import * as React from 'react';
import { MapDispatchToProps, connect } from 'react-redux';
import { login } from '../store/action/user';

interface UserPropsType {
  username: string;
  userRole: string;
  onSubmit: (username: string, password: string) => void;
}

interface UserStateType {
  _username: string;
  _password: string;
}

class User extends React.Component<UserPropsType, UserStateType> {

  state: UserStateType = {
    _username: '',
    _password: '',
  };

  constructor (props: UserPropsType) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit () {
    this.props.onSubmit(this.state._username, this.state._password);
  }

  handleInputChange (type: string, event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    switch (type) {
      case 'username': 
        this.setState({
          _username: value
        }); 
        break;
      default:
        this.setState({
          _password: value
        });
    }
  }

  render () {

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            username: <input type="text"
              value={this.state._username} 
              onChange={this.handleInputChange('username', event)}/>
          </div>
          <div>
            password: <input type="password"/>
          </div>
          <button>submit</button>
        </form>
        <hr/>
        <h2>
          username: {this.props.username}
          <br/>
          userRole: {this.props.userRole}
        </h2>
      </div>
    );
  }
}

interface MapDispatchToPropsType {
  onSubmit: (username: string, password: string) => void;
}

const mapDispatchToProps: MapDispatchToProps<MapDispatchToPropsType, UserPropsType> = (dispatch) => {
  return {
    onSubmit: (username: string, password) => {
      dispatch(login(username, password));
    }
  };
};

const UserContainers = connect(mapDispatchToProps)(User);

export default UserContainers;
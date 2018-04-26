import * as React from 'react';
import { MapDispatchToProps, connect, MapStateToProps } from 'react-redux';
import { StoreStateType } from '../store';
import { login } from '../store/action/user';

type MapStateToPropsType = {
  username?: string;
  userRole?: string;
  userCopy?: string;
};

type MapDispatchToPropsType = {
  onSubmit?: (username: string, password: string) => void;
};

interface UserPropsType extends MapStateToPropsType, MapDispatchToPropsType {
  
}

type UserStateType = {
  _username: string;
  _password: string;
};

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
    (this.props.onSubmit as Function)(this.state._username, this.state._password);
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

  componentWillMount() {
    console.log(this.props);
  }

  render () {

    return (
      <div>
        <form>
          <div>
            username: <input type="text"
              value={this.state._username} 
              onChange={this.handleInputChange.bind(this, 'username')}/>
          </div>
          <div>
            password: <input type="password"
              value={this.state._password}
              onChange={this.handleInputChange.bind(this, 'password')}/>
          </div>
          <button type="button" onClick={this.handleFormSubmit}>submit</button>
        </form>
        <hr/>
        <h2>
          username: {this.props.username}
          <br/>
          userRole: {this.props.userRole}
          <br/>
          userCopy: {this.props.userCopy}
        </h2>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<MapStateToPropsType, UserPropsType, StoreStateType> = (state, ownProps) => {
  return {
    username: state.user.username,
    userRole: state.user.userRole,
    userCopy: state.userCopy
  };
};

const mapDispatchToProps: MapDispatchToProps<MapDispatchToPropsType, UserPropsType> = (dispatch) => {
  return {
    onSubmit: (username: string, password: string) => {
      dispatch(login(username, password));
    }
  };
};

const UserContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default UserContainers;
import * as React from 'react';
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import { StoreStateType } from '../store';
import { addCount } from '../store/action';
import { createSelector } from 'reselect';

interface MapStateToPropsType {
  count?: number;
}

interface MapDispatchToPropsType {
  onClick?: (id: string, num: number) => void;
}

interface CountPropsType extends MapStateToPropsType, MapDispatchToPropsType {
  id: string;
}

class CountComponent extends React.Component<CountPropsType> {

  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    (this.props.onClick as Function)(this.props.id, 1);
  }

  render () {
    
    return (
      <div>
        {this.props.count}
        <br/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }

}

const getCount = (state: StoreStateType, props: CountPropsType) => state.count[props.id];

const makeGetCount = () => {
  return createSelector(
    [getCount],
    (count: number) => count
  );
};

const makeMapStateToProps = () => {
  const privateGetCount = makeGetCount();
  const mapStateToProps: MapStateToProps<MapStateToPropsType, CountPropsType, StoreStateType> = (state, ownporps) => {
    return {
      count: privateGetCount(state, ownporps)
    };  
  };
  return mapStateToProps;
};

const mapDispatchToProps: MapDispatchToProps<MapDispatchToPropsType, CountPropsType> = (dispatch, ownprops) => {
  return {
    onClick: (id: string, num: number) => {
      dispatch(addCount(id, num));
    }
  };
};

const Count = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(CountComponent);

export default Count;
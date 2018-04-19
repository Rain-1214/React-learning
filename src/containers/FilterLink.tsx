import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import { StoreStateType } from '../store';
import MyLink, { MyLinkType } from '../component/Redux/MyLink/MyLink';
import { setVisibilityFilter } from '../store/action';

interface LinkMapStateReturnProp {
  active: boolean;
}

const mapStateToProps: MapStateToProps<LinkMapStateReturnProp, MyLinkType, StoreStateType> = (state, ownProps) => {
  return {
    active: state.setVisibilityFilter === ownProps.filter
  };
};

interface LinkMapDispatchReturnProp {
  onClick: () => void;
}

const mapDispatchToProps: MapDispatchToProps<LinkMapDispatchReturnProp, MyLinkType> = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const filterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLink);

export default filterLink;
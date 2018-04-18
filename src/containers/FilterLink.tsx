import { connect } from 'react-redux';
import MyLink from '../component/Redux/MyLink/MyLink';
import { setVisibilityFilter } from '../store/action';

// tslint:disable-next-line:no-any
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLink);

export default FilterLink;
import { MapStateToProps } from 'react-redux';
import { IHandleErrorMapStateType } from './handleErrorContainer.type';
import { IHandleErrorProps } from './../../../component/common/handleError/handleError.type';
import { IStoreState } from '../../../store/index.type';
import { connect } from 'react-redux';
import HandleError from '../../../component/common/handleError/handleError';

const mapStateToProps: MapStateToProps<IHandleErrorMapStateType, IHandleErrorProps, IStoreState> = (state, ownProps) => {
  return {
    errorType: state.handleError.errorType,
    errorMessage: state.handleError.errorMessage
  };
}

const HandleErrorContainer = connect(
  mapStateToProps
)(HandleError as React.ComponentClass<IHandleErrorProps>)

export default HandleErrorContainer;
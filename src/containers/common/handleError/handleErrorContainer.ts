import { MapStateToProps } from 'react-redux';
import { IHandleErrorMapStateType } from './handleErrorContainer.type';
import { IStoreState } from '../../../store/index.type';
import { connect } from 'react-redux';
import { IHandleErrorProps } from '../../../component/common/handleError/handleErrorComponent.type';
import HandleErrorComponent from '../../../component/common/handleError/handleErrorComponent';

const mapStateToProps: MapStateToProps<IHandleErrorMapStateType, IHandleErrorProps, IStoreState> = (state, ownProps) => {
  return {
    errorType: state.handleError.errorType,
    errorMessage: state.handleError.errorMessage,
    time: state.handleError.time
  };
}

const HandleError = connect(
  mapStateToProps
)(HandleErrorComponent as React.ComponentClass<IHandleErrorProps>)

export default HandleError;
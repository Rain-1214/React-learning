import { MapStateToProps, connect } from "react-redux";
import { IStudentContainerMapState } from "./studentContainer.type";
import { IStudentComponentProps } from "../../component/student/studentComponent.type";
import { IStoreState } from "../../store/index.type";
import StudentComponent from "../../component/student/studentComponent";

const mapStateToProps: MapStateToProps<IStudentContainerMapState, IStudentComponentProps, IStoreState> = (state, ownProps) => {
  return {
    username: state.user.username,
    userRole: state.user.userRole
  }
}

export default connect(
  mapStateToProps
)(StudentComponent as React.ComponentClass<IStudentComponentProps>);
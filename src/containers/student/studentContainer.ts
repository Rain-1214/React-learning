import { MapStateToProps, connect, MapDispatchToProps } from "react-redux";
import { IStudentContainerMapState, IStudentContainerMapDispatch } from "./studentContainer.type";
import { IStudentComponentProps } from "../../component/student/studentComponent.type";
import { IStoreState } from "../../store/index.type";
import StudentComponent from "../../component/student/studentComponent";
import { getGradeAction } from "../../store/actions/getGradeActions/getGradeActions";

const mapStateToProps: MapStateToProps<IStudentContainerMapState, IStudentComponentProps, IStoreState> = (state, ownProps) => {
  return {
    username: state.user.username,
    userRole: state.user.userRole,
    gradeMessage: state.student.gradeMessage
  }
}

const mapDispatchToProps: MapDispatchToProps<IStudentContainerMapDispatch, IStudentComponentProps> = (dispatch, ownProps) => {
  return {
    getGrade: () => {
      dispatch(getGradeAction())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentComponent as React.ComponentClass<IStudentComponentProps>);
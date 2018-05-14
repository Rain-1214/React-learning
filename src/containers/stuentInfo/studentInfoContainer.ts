import { MapStateToProps, connect } from "react-redux";
import { IStudentInfoContainerMapState } from "./studentInfoContainer.type";
import { IStudentInfoComponentProps } from "../../component/student/children/studentWrapper/children/studentInfoComponent.type";
import { IStoreState } from "../../store/index.type";
import studentInfoComponent from "../../component/student/children/studentWrapper/children/studentInfoComponent";

const mapStateToProps: MapStateToProps<IStudentInfoContainerMapState, IStudentInfoComponentProps, IStoreState> = (state, ownProps) => {
  return {
    gradeMessage: state.student.gradeMessage
  }
}

const StudentInfo = connect(
  mapStateToProps
)(studentInfoComponent as React.ComponentClass<IStudentInfoComponentProps>)
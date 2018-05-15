import { MapStateToProps, connect } from "react-redux";
import { IStudentInfoContainerMapState } from "./studentInfoContainer.type";
import { IStudentInfoComponentProps } from "../../component/student/children/studentWrapper/children/studentInfoComponent.type";
import { IStoreState } from "../../store/index.type";
import studentInfoComponent from "../../component/student/children/studentWrapper/children/studentInfoComponent";
import { Omit } from "antd/lib/_util/type";
import { FormComponentProps } from "antd/lib/form";

const mapStateToProps: MapStateToProps<IStudentInfoContainerMapState, Omit<IStudentInfoComponentProps, keyof FormComponentProps>, IStoreState> = (state, ownProps) => {
  return {
    gradeMessage: state.student.gradeMessage
  }
}

const StudentInfo = connect(
  mapStateToProps
)(studentInfoComponent)

export default StudentInfo;
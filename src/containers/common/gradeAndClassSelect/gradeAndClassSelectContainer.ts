import { MapStateToProps, connect } from "react-redux";
import { IGradeAndClassSelectMapState } from "./gradeAndClassSelectContainer.type";
import { IGradeAndClassSelectProps } from "../../../component/student/children/gradeAndClassSelect/gradeAndClassSelectComponent.type";
import { IStoreState } from "../../../store/index.type";
import GradeAndClassSelectComponent from "../../../component/student/children/gradeAndClassSelect/gradeAndClassSelectComponent";

const mapStateToProps: MapStateToProps<IGradeAndClassSelectMapState, IGradeAndClassSelectProps, IStoreState> = (state, ownProps) => {
  return {
    gradeMessage: state.student.gradeMessage
  }
}

const GradeAndClassSelect = connect(
  mapStateToProps
)(GradeAndClassSelectComponent as React.ComponentClass<IGradeAndClassSelectProps>)

export default GradeAndClassSelect;
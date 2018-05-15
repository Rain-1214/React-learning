import * as React from "react";
import { IStudentWrapperComponentProps } from "./studentWrapperComponent.type";
import StudentInfo from "../../../../containers/stuentInfo/studentInfoContainer";

import './studentWrapperComponent.css'

class StudentWrapperComponent extends React.Component<IStudentWrapperComponentProps> {

  public render () {

    const studentsElement = this.props.studnets.map((value, index) => (<StudentInfo selectChange={this.props.selectChange} selectVisible={this.props.selectVisible} key={value.id} student={value} />))

    return (
      <div className="student-wrapper">
        {studentsElement}
      </div>
    )
  }
}

export default StudentWrapperComponent;
import * as React from "react";
import { IStudentWrapperComponentProps } from "./studentWrapperComponent.type";
import StudentInfoComponent from "./children/studentInfoComponent";

import './studentWrapperComponent.css'

class StudentWrapperComponent extends React.Component<IStudentWrapperComponentProps> {

  public render () {

    const studentsElement = this.props.studnets.map((value, index) => (<StudentInfoComponent key={value.id} student={value} />))

    return (
      <div className="student-wrapper">
        {studentsElement}
      </div>
    )
  }
}

export default StudentWrapperComponent;
import * as React from "react";

import '../studentWrapper/studentWrapperComponent.css'
import { IAddStudentWrapperComponentProps } from "./addStudentWrapperComponent.type";
import AddStudentComponent from "./children/addStudentComponent";

class AddStudentWrapperComponent extends React.Component<IAddStudentWrapperComponentProps> {


  public render () {

    return (
      <div className="student-wrapper">
        {
          this.props.students.map((e, i) => (
            <AddStudentComponent selectVisible={this.props.selectVisible}
                                 gradeMesage={this.props.gradeMessage}
                                 key={i}
                                 student={e}
                                 studentIndex={i}
                                 reseiveStudentIndex={this.props.reseiveStudentIndex}/>
          ))
        }
      </div>
    )
  }
}

export default AddStudentWrapperComponent;
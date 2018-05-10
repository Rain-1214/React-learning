import * as React from "react";
import StudentComponentStyle from './studentComponent.module.scss';
import { IStudentComponentProps } from "./studentComponent.type";
import GradeAndClassSelect from "../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer";

class StudentComponent extends React.Component<IStudentComponentProps> {

  public componentDidMount() {
    this.props.getGrade();
  }

  public gradeOrClassChange (grade: number, classNum: number) {
    // tslint:disable-next-line:no-console
    console.log('student Component gradeOrClassChange', grade, classNum)
  }


  public render () {

    return (
      <div>
        <div className={StudentComponentStyle.userInfo}>
          用户名:{this.props.username}  身份:{this.props.userRole}
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <GradeAndClassSelect receiveGrandAndClass={this.gradeOrClassChange} />
        </div>
      </div>
    )
  }
}

export default StudentComponent;
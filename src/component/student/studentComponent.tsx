import * as React from "react";
import StudentComponentStyle from './studentComponent.module.scss';
import { IStudentComponentProps, IStudentComponentState } from "./studentComponent.type";
import GradeAndClassSelect from "../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer";
import { Button, message } from "antd";
import StudentWrapperComponent from "./children/studentWrapper/studentWrapperComponent";
import { StudentService } from "../../api/student/studentService";

class StudentComponent extends React.Component<IStudentComponentProps, IStudentComponentState> {

  public currentPageNum: number = 1;
  public studentCountNum: number = 0;

  public state: IStudentComponentState = {
    students: []
  }

  public async componentDidMount() {
    this.props.getGrade();
    StudentService.getStudent(this.currentPageNum).subscribe(res => {
      if (res.data.stateCode === 1) {
        this.studentCountNum = res.data.data.countNum;
        this.setState({
          students: res.data.data.students,
        })
      } else {
        message.error(res.data.message);
      }
    });
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
          <GradeAndClassSelect canChange={true} receiveGradeAndClass={this.gradeOrClassChange} />
          <Button type="primary">查找</Button>
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <StudentWrapperComponent studnets={this.state.students} />
        </div>
      </div>
    )
  }
}

export default StudentComponent;
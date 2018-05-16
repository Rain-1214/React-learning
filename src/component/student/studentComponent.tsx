import * as React from "react";
import StudentComponentStyle from './studentComponent.module.scss';
import { IStudentComponentProps, IStudentComponentState } from "./studentComponent.type";
import GradeAndClassSelect from "../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer";
import { Button, message, Modal, Pagination, Spin } from "antd";
import StudentWrapperComponent from "./children/studentWrapper/studentWrapperComponent";
import { StudentService } from "../../api/student/studentService";
import { Student } from "../../entity/student";
import { Grade } from "../../entity/grade";
import { ClassNum } from "../../entity/class";

class StudentComponent extends React.Component<IStudentComponentProps, IStudentComponentState> {

  public currentPageNum: number = 1;
  public deleteStudentIds: Set<number> = new Set();
  public currentGrade: number = -1;
  public currentClass: number = -1;

  public state: IStudentComponentState = {
    students: [],
    deleteSelectVisible: false,
    loadingFlag: false,
    studentCountNum: 0,
    pageVisible: true
  }

  public async componentDidMount() {
    this.props.getGrade();
    this.loadStudent();
  }

  public loadStudent = () => {
    this.setState({
      loadingFlag: true
    })
    if (this.currentClass !== -1 && this.currentGrade !== -1) {
      StudentService.getStuByGidCid(this.currentGrade, this.currentClass).subscribe(res => {
        if (res.data.stateCode === 1) {
          this.setState({
            pageVisible: false,
            students: res.data.data
          })
        } else {
          message.error(res.data.message);
        }
        this.setState({
          loadingFlag: false
        })
      })
    } else {
      StudentService.getStudent(this.currentPageNum).subscribe(res => {
        if (res.data.stateCode === 1) {
          this.setState({
            studentCountNum: res.data.data.countNum,
            students: res.data.data.students,
            pageVisible: true
          })
        } else {
          message.error(res.data.message);
        }
        this.setState({
          loadingFlag: false
        })
      });
    }
  }

  public getAllStudent = () => {
    this.currentClass = -1;
    this.currentGrade = -1;
    this.loadStudent();
  }

  public gradeOrClassChange = (grade: number, classNum: number) => {
    // tslint:disable-next-line:no-console
    console.log('student Component gradeOrClassChange', grade, classNum)
    this.currentClass = classNum;
    this.currentGrade = grade;
  }

  public pageNumChange = (page: number, pageSize: number) => {
    this.currentPageNum = page;
    this.loadStudent();
  }

  public changeSelect (value: boolean) {
    this.setState({
      deleteSelectVisible: value
    })
  }

  public deleteStudents = () => {
    // tslint:disable-next-line:no-console
    console.log('deleteStudents id set',this.deleteStudentIds)
    if (this.deleteStudentIds.size <= 0) {
      message.info('没有勾选任何学生');
      return;
    }
    Modal.confirm({
      title: '确认删除?',
      content: '你确定要删除这些学生么',
      onOk: () => {
        this.setState({
          loadingFlag: true
        })
        StudentService.deleteStudent(Array.from(this.deleteStudentIds)).subscribe(res => {
          if (res.data.stateCode === 1) {
            message.success('删除成功');
            this.deleteStudentIds.clear();
            this.loadStudent();
          } else {
            message.error(res.data.message);
          }
          this.setState({
            loadingFlag: false
          })
        })
      }
    })
  }

  public deleteSelectChange = (selectFlag: boolean, student: Student) => {
    selectFlag ? this.deleteStudentIds.add(student.id as number) : this.deleteStudentIds.delete(student.id as number);
  }

  public getGradeNameClassNameByGIdCId = (gradeId: number, classId: number) => {
    if ((this.props.gradeMessage as Grade[]).length === 0) {
      return null;
    }
    const grade = this.props.gradeMessage.find(e => e.id === gradeId) as Grade;
    const classNum = grade.classes.find(e => e.id === classId) as ClassNum;
    return `${grade.gradeName}${classNum.className}`;
  }

  public render () {

    return (
      <div>
        <div className={StudentComponentStyle.userInfo}>
          用户名:{this.props.username}  身份:{this.props.userRole}
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <GradeAndClassSelect canChange={true} receiveGradeAndClass={this.gradeOrClassChange} />
          <Button type="primary" onClick={this.loadStudent}>查找</Button>
          <Button type="primary" onClick={this.getAllStudent}>获取全部同学</Button>
          {
            this.state.deleteSelectVisible ? (
              <>
                <Button type="default" onClick={this.changeSelect.bind(this, false)}>取消勾选</Button>
                <Button type="danger" onClick={this.deleteStudents}>删除</Button>
              </>
            ) : (
              <Button type="default" onClick={this.changeSelect.bind(this, true)}>勾选删除</Button>
            )
          }
        </div>
        <div className={StudentComponentStyle.setPadding}>
          当前路径: {(this.currentGrade !== -1 && this.currentClass !== -1) ? this.getGradeNameClassNameByGIdCId(this.currentGrade, this.currentClass) : '全部同学'}
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <Spin tip="loading..." spinning={this.state.loadingFlag}>
            <StudentWrapperComponent studnets={this.state.students} 
                                     selectVisible={this.state.deleteSelectVisible}
                                     selectChange={this.deleteSelectChange}
                                     refreshStudent={this.loadStudent}/>
          </Spin>
          {
            this.state.pageVisible ? (
              <Pagination style={{textAlign: 'right'}} defaultPageSize={6} total={this.state.studentCountNum} onChange={this.pageNumChange} />
            ) : (
              null
            )
          }
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <Button type="primary">添加同学</Button>
        </div>
      </div>
    )
  }
}

export default StudentComponent;
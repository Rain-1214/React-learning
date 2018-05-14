import * as React from "react";
import StudentComponentStyle from './studentComponent.module.scss';
import { IStudentComponentProps, IStudentComponentState } from "./studentComponent.type";
import GradeAndClassSelect from "../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer";
import { Button, message, Modal, Pagination, Spin } from "antd";
import StudentWrapperComponent from "./children/studentWrapper/studentWrapperComponent";
import { StudentService } from "../../api/student/studentService";
import { Student } from "../../entity/student";

class StudentComponent extends React.Component<IStudentComponentProps, IStudentComponentState> {

  public currentPageNum: number = 1;
  public studentCountNum: number = 0;
  public deleteStudentIds: Set<number> = new Set();

  public state: IStudentComponentState = {
    students: [],
    deleteSelectVisible: false,
    loadingFlag: false
  }

  public async componentDidMount() {
    this.props.getGrade();
    this.loadStudent();
  }

  public loadStudent() {
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

  public render () {

    return (
      <div>
        <div className={StudentComponentStyle.userInfo}>
          用户名:{this.props.username}  身份:{this.props.userRole}
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <GradeAndClassSelect canChange={true} receiveGradeAndClass={this.gradeOrClassChange} />
          <Button type="primary">查找</Button>
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
          <Spin tip="loading..." spinning={this.state.loadingFlag}>
            <StudentWrapperComponent studnets={this.state.students} 
                                     selectVisible={this.state.deleteSelectVisible}
                                     selectChange={this.deleteSelectChange}/>
          </Spin>
          <Pagination style={{textAlign: 'right'}} defaultPageSize={6} total={this.studentCountNum} onChange={this.pageNumChange} />
        </div>
      </div>
    )
  }
}

export default StudentComponent;
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
import AddStudentWrapperComponent from "./children/addStudentWrapper/addStudentWrapperComponent";
import { Observable } from "rxjs";
import { ToolBase } from "../../tool/ToolBase";
import { Clone } from "../../tool/clone";
import { User } from "../../entity/user";

class StudentComponent extends React.Component<IStudentComponentProps, IStudentComponentState> {

  public currentPageNum: number = 1;
  public deleteStudentIds: Set<number> = new Set();
  public currentGrade: number = -1;
  public currentClass: number = -1;

  public addStudentId: number = 1;

  public state: IStudentComponentState = {
    students: [],
    deleteSelectVisible: false,
    loadingFlag: false,
    studentCountNum: 0,
    pageVisible: true,
    addStudents: [],
    selectAddStudentsIndex: new Set(),
    addSelectVisible: false,
    addStudentIspending: false
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

  public changeDeleteSelect = (value: boolean) => {
    this.setState({
      deleteSelectVisible: value
    })
  }

  public changeAddSelect = (value: boolean) => {
    this.setState({
      addSelectVisible: value
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

  public addStudents = (students: Student[]): Observable<boolean> => {
    this.setState({
      addStudentIspending: true
    })
    return StudentService.addStudent(students).map(res => {
      this.setState({
        addStudentIspending: false
      })
      if (res.data.stateCode !== 1) {
        message.error(res.data.message)
      }
      return res.data.stateCode === 1;
    })
  }

  public checkAddStudnetsValid = (students: Student[]) => {
    if (!students.every(e => ToolBase.checkEmptyProperty(e, ['name', 'sex', 'studentNumber', 'gradeId', 'classId']))) {
      message.error('添加的选项中有无效的值');
      return false;
    }
    const tempSet = new Set();
    let studentNumberRepeat = true;
    students.forEach(e => {
      if (tempSet.has(e.studentNumber)) {
        studentNumberRepeat = false
      } else {
        tempSet.add(e.studentNumber)
      }
    });
    if (!studentNumberRepeat) {
      message.error('添加的选项中有学号重复');
    }
    return studentNumberRepeat;
  }

  public addSelectStudents = () => {
    const tempStudents = [...this.state.addStudents.filter((e, i) => this.state.selectAddStudentsIndex.has(i))]
    // tslint:disable-next-line:no-console
    console.log(tempStudents)
    if (this.checkAddStudnetsValid(tempStudents)) {
      // tslint:disable-next-line:no-console
      console.log('通过检测:', tempStudents);
      this.addStudents(tempStudents).subscribe(res => {
        if (res) {
          const tempStudnetsIndexArray = Array.from(this.state.selectAddStudentsIndex).sort((a,b) => b - a);
          const tempStudentsArray = Clone.deepCopy(this.state.addStudents);
          tempStudnetsIndexArray.forEach(e => { tempStudentsArray.splice(e, 1) });
          // tslint:disable-next-line:no-console
          console.log('添加之后：', tempStudentsArray)
          this.setState({
            selectAddStudentsIndex: new Set(),
            addStudents: tempStudentsArray
          })
        }
      })
    }
  }

  public reseiveStudentIndex = (index: number, selectFlag: boolean) => {
    if (selectFlag) {
      this.setState({
        selectAddStudentsIndex: new Set(this.state.selectAddStudentsIndex.add(index))
      })
    } else {
      const tempSet = new Set(this.state.selectAddStudentsIndex)
      tempSet.delete(index)
      this.setState({
        selectAddStudentsIndex: tempSet
      })
    }
  }

  public reseiveDeleteSelectChange = (selectFlag: boolean, student: Student) => {
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

  public addEmptyStudent = () => {
    this.setState({
      addStudents: [
        ...this.state.addStudents,
        new Student(this.addStudentId)
      ]
    }, () => {
      this.addStudentId++;
    })
  }

  public deleteAddStudent = (index: number) => {
    Modal.confirm({
      title: '确认删除',
      content: '您确认删除么？',
      okText: '确认',
      cancelText: '取消',
      onOk:() => {
        const tempStudentsArray = Clone.deepCopy(this.state.addStudents);
        tempStudentsArray.splice(index, 1);
        const tempSet = new Set(this.state.selectAddStudentsIndex);
        if (tempSet.has(index)) {
          tempSet.delete(index)
        }
        this.setState({
          addStudents: tempStudentsArray,
          selectAddStudentsIndex: tempSet
        })
      }
    })
  }

  public addSingleStudent = (index: number) => {
    const students = [Clone.deepCopy(this.state.addStudents[index])];
    if (this.checkAddStudnetsValid(students)) {
      this.addStudents(students).subscribe(res => {
        if (res) {
          const tempStudents = Clone.deepCopy(this.state.addStudents);
          const tempSet = new Set(this.state.selectAddStudentsIndex);
          if (tempSet.has(index)) {
            tempSet.delete(index);
          }
          tempStudents.splice(index, 1);
          this.setState({
            addStudents: tempStudents,
            selectAddStudentsIndex: tempSet
          })
          message.success('添加成功')
        }
      })
    }
  }

  public render () {

    return (
      <div>
        <div className={StudentComponentStyle.userInfo}>
          用户名:{this.props.username}  身份:{User.translateUserRole(this.props.userRole)}
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <GradeAndClassSelect canChange={true} receiveGradeAndClass={this.gradeOrClassChange} />
          <Button type="primary" onClick={this.loadStudent}>查找</Button>
          <Button type="primary" onClick={this.getAllStudent}>获取全部同学</Button>
          {
            this.state.deleteSelectVisible ? (
              <>
                <Button type="default" onClick={this.changeDeleteSelect.bind(null, false)}>取消勾选</Button>
                <Button type="danger" onClick={this.deleteStudents}>删除</Button>
              </>
            ) : (
              <Button type="default" onClick={this.changeDeleteSelect.bind(null, true)}>勾选删除</Button>
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
                                     selectChange={this.reseiveDeleteSelectChange}
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
          <Button type="primary" onClick={this.addEmptyStudent}>增添一个空的同学</Button>
          {
            this.state.addStudents.length >= 1 ? (
              <Button type="primary" onClick={this.changeAddSelect.bind(null, true)}>勾选添加</Button>
            ) : (null)
          }
          {
            this.state.selectAddStudentsIndex.size >= 1 ? (
              <>
                <Button type="primary" onClick={this.addSelectStudents}>添加已勾选的同学</Button>
                <Button type="primary" onClick={this.changeAddSelect.bind(null, false)}>取消勾选</Button>
              </>
            ) : (null)
          }
        </div>
        <div className={StudentComponentStyle.setPadding}>
          <AddStudentWrapperComponent selectVisible={this.state.addSelectVisible} 
                                      gradeMessage={this.props.gradeMessage}
                                      students={this.state.addStudents}
                                      reseiveStudentIndex={this.reseiveStudentIndex}
                                      addSingleStudent={this.addSingleStudent}
                                      deleteAddStudent={this.deleteAddStudent}/>
        </div>
      </div>
    )
  }
}

export default StudentComponent;
import * as React from "react";
import { IStudentInfoComponentProps, IStudentInfoComponentState } from "./studentInfoComponent.type";
import GradeAndClassSelect from "../../../../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer";
import { Clone } from "../../../../../tool/clone";
import { Form, Input, Button, Select, Checkbox, Modal, Icon, message } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { Student } from "../../../../../entity/student";
import { Grade } from "../../../../../entity/grade";
import { ClassNum } from "../../../../../entity/class";
import { Equal } from "../../../../../tool/Equal";
import { StudentService } from "../../../../../api/student/studentService";

import './studentInfoComponent.css';

class StudentInfoComponent extends React.Component<IStudentInfoComponentProps, IStudentInfoComponentState> {

  public state: IStudentInfoComponentState = {
    studentCopy: {},
    canModify: false,
    checkboxText: '未选择',
    modifyVisible: false,
    submitModifyStudentFlag: true
  }

  public componentDidMount () {
    this.setState({
      studentCopy: Clone.deepCopy(this.props.student)
    });
  }

  public triggleCanModify = () => {
    this.setState({
      canModify: !this.state.canModify
    })
  }

  public triggleModifyModal = (value: boolean) => {
    if (value) {
      if (this.state.studentCopy.classId === -1 || this.state.studentCopy.gradeId === -1) {
        message.warn('没有选择班级或年级');
        return;
      } 
      if (Equal.deepEqual(this.state.studentCopy, this.props.student)) {
        message.warn('没有做出任何修改');
        return;
      }
    }
    this.setState({
      modifyVisible: value
    })
  }

  public gradeOrClassChange = (gradeId: number, classId: number) => {
    // tslint:disable-next-line:no-console
    console.log('student detail componet gradeOrClassChange', `gradeId:${gradeId}`, `classId${classId}`);
    this.setState({
      studentCopy: {
        ...this.state.studentCopy,
        gradeId,
        classId
      }
    })
  }

  public selectFlagChange = (event: CheckboxChangeEvent) => {
    this.props.selectChange(event.target.checked, this.props.student);
    this.setState({
      checkboxText: event.target.checked ? '已选择' : '未选择'
    })
  }

  public submitAfterModifyStudent = () => {
    this.props.form.validateFields((error: any, value: Student) => {
      if (this.state.submitModifyStudentFlag) {
        this.setState({
          submitModifyStudentFlag: false
        })
        value.gradeId = this.state.studentCopy.gradeId;
        value.classId = this.state.studentCopy.classId;
        value.id = this.props.student.id;
        value.sex = this.props.form.getFieldValue('sex') === '男' ? 1 : 2;
        StudentService.updateStudent(value).subscribe(res => {
          if (res.data.stateCode === 1) {
            message.success('修改成功');
          } else {
            message.error(res.data.message);
          }
          this.setState({
            canModify: false,
            modifyVisible: false,
            submitModifyStudentFlag: true
          });
          this.props.refreshStudent();
        })
      }
    })
  }

  public createStudentMessageLi = (student: Student): JSX.Element | null => {
    if (!this.state.modifyVisible) {
      return null;
    }
    return (
      <>
        <li><span>姓名：</span>{student.name}</li>
        <li><span>性别：</span>{student.sex === 1 ? '男' : '女'}</li>
        <li><span>学号：</span>{student.studentNumber}</li>
        <li><span>班级：</span>{this.getGradeNameAndClassNamebyGidCid(student.gradeId as number, student.classId as number)}</li>
      </>
    )
  }

  public getGradeNameAndClassNamebyGidCid = (gradeId: number, classId: number) => {
    if ((this.props.gradeMessage as Grade[]).length === 0) {
      return null;
    }
    const grade = (this.props.gradeMessage as Grade[]).find(e => e.id === gradeId) as Grade;
    const classNum = (grade as Grade).classes.find(e => e.id === classId) as ClassNum;
    return `${grade.gradeName}${classNum.className}`
  }

  public render () {

    return (
      <div className="studnet">
        <Form>
          <ul>
            {
              this.props.selectVisible ? (
                <Checkbox onChange={this.selectFlagChange}>{this.state.checkboxText}</Checkbox>
              ) : (null)
            }
            <li>
              <span className="label">姓名:</span> 
              {this.state.canModify ? (
                <Form.Item>
                  {
                    this.props.form.getFieldDecorator('name', {
                      rules: [
                        { required: true, message: 'name is required' }
                      ],
                      initialValue: this.state.studentCopy.name
                    })(
                      <Input placeholder="name" />
                    )
                  }
                </Form.Item>
              ) : (
                <span>{this.props.student.name}</span>
              )}
            </li>
            <li>
              <span className="label">性别:</span>
              {
                this.state.canModify ? (
                  <Form.Item>
                    {
                      this.props.form.getFieldDecorator('sex', {
                        initialValue: this.state.studentCopy.sex === 1 ? '男' : '女'
                      })(
                        <Select>
                          <Select.Option key='1' value='男'>男</Select.Option>
                          <Select.Option key='2' value='女'>女</Select.Option>
                        </Select>
                      )
                    }
                  </Form.Item>
                ) : (
                  <span>{ this.props.student.sex === 1 ? '男' : '女' }</span>
                )
              }
            </li>
            <li>
              <span className="label">学号:</span> 
              {this.state.canModify ? (
                <Form.Item>
                  {
                    this.props.form.getFieldDecorator('studentNumber', {
                      rules: [
                        { required: true, message: 'studentNumber is required' }
                      ],
                      initialValue: this.state.studentCopy.studentNumber
                    })(
                      <Input placeholder="name" />
                    )
                  }
                </Form.Item>
              ) : (
                <span>{this.props.student.studentNumber}</span>
              )}
            </li>
            <li>
              <span className="label">班级:</span>
              {
                this.state.canModify ? (
                  <GradeAndClassSelect  selectWidth={90}
                                        canChange={true} 
                                        defaultGrade={this.state.studentCopy.gradeId} 
                                        defalutClass={this.state.studentCopy.classId}
                                        receiveGradeAndClass={this.gradeOrClassChange}/>
                ) : (
                  <span>{this.getGradeNameAndClassNamebyGidCid(this.props.student.gradeId as number, this.props.student.classId as number)}</span>
                )
              }
            </li>
          </ul>
          <div className="button-group">
            <Button type="primary" size="small" onClick={this.triggleCanModify}>{this.state.canModify ? '取消修改' : '修改'}</Button>
            {
              this.state.canModify ? (
                <Button type="primary" size="small" onClick={this.triggleModifyModal.bind(null, true)}>提交</Button>
              ) : (null)
            }
          </div>
        </Form>
        <Modal 
          className="modify-modal"
          title="确认修改"
          visible={this.state.modifyVisible}
          onCancel={this.triggleModifyModal.bind(null, false)}
          onOk={this.submitAfterModifyStudent}
          okText="确认"
          cancelText="取消"
          confirmLoading={!this.state.submitModifyStudentFlag}>
          <div>
            <ul>
              {this.createStudentMessageLi(this.props.student)}
            </ul>
          </div>
          <div>

            <Icon type="double-right" />
          </div>
          <div>
            <ul>
              {this.createStudentMessageLi(this.state.studentCopy)}
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(StudentInfoComponent);
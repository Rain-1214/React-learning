import * as React from "react";
import { IStudentInfoComponentProps, IStudentInfoComponentState } from "./studentInfoComponent.type";
import GradeAndClassSelect from "../../../../../containers/common/gradeAndClassSelect/gradeAndClassSelectContainer";
import { Clone } from "../../../../../tool/clone";
import { Form, Input, Button, Select } from "antd";

import './studentInfoComponent.css';

class StudentInfoComponent extends React.Component<IStudentInfoComponentProps, IStudentInfoComponentState> {

  public state: IStudentInfoComponentState = {
    studentCopy: {},
    canModify: false
  }

  public componentDidMount () {
    this.setState({
      studentCopy: Clone.deepCopy(this.props.student)
    })
  }

  public triggleCanModify = () => {
    this.setState({
      canModify: !this.state.canModify
    })
  }

  public gradeOrClassChange = (gradeId: number, classId: number) => {
    // tslint:disable-next-line:no-console
    console.log('student detail componet gradeOrClassChange', `gradeId:${gradeId}`, `classId${classId}`)
  }

  public render () {

    return (
      <div className="studnet">
        <Form>
          <ul>
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
                          <Select.Option key='1' value='1'>男</Select.Option>
                          <Select.Option key='2' value='2'>女</Select.Option>
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
              <GradeAndClassSelect  selectWidth={90}
                                    defaultGrade={this.props.student.gradeId} defalutClass={this.props.student.classId}
                                    receiveGradeAndClass={this.gradeOrClassChange} canChange={this.state.canModify} />
            </li>
          </ul>
          <div className="button-group">
            <Button type="primary" size="small" onClick={this.triggleCanModify}>{this.state.canModify ? '取消修改' : '修改'}</Button>
            {
              this.state.canModify ? (
                <Button type="primary" size="small">提交</Button>
              ) : (null)
            }
          </div>
        </Form>
      </div>
    )
  }
}

export default Form.create()(StudentInfoComponent);
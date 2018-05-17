import * as React from "react";
import { Form, Input, Icon, Select, Cascader, Checkbox } from "antd";
import { IAddStudentComponentProps, IAddStudentComponentFormData, IAddStudentComponentState } from "./addStudentComponent.type";
import { ICascaderOption } from "../../../../../entity/cascaderOption";

import '../../studentWrapper/children/studentInfoComponent.css'
import { CheckboxChangeEvent } from "antd/lib/checkbox";

class AddStudentComponent extends React.Component<IAddStudentComponentProps, IAddStudentComponentState> {

  public state: IAddStudentComponentState = {
    selectProps: false
  }

  public selectChange = (event: CheckboxChangeEvent) => {
    this.setState({
      selectProps: event.target.checked
    })
    this.props.reseiveStudentIndex(this.props.studentIndex, event.target.checked);
  }

  public render () {

    const cascaderOptions: ICascaderOption[] = this.props.gradeMesage.map(e => {
      return {
        value: e.id,
        label: e.gradeName as string,
        children: e.classes.map(item => {
          return {
            value: item.id,
            label: item.className as string,
          }
        })
      }
    })

    return (
      <div className="student">
        <Form>
          {
            this.props.selectVisible ? (
              <Form.Item>
                <Checkbox onChange={this.selectChange}>
                  { this.state.selectProps ? '已选择' : '未选择' }
                </Checkbox>
              </Form.Item>
            ) : null
          }
          <Form.Item label="姓名" labelCol={{span: 6}} wrapperCol={{span:16}}>
            {
              this.props.form.getFieldDecorator('name', {
                rules: [
                  {
                    required: true, message: '填写姓名'
                  }
                ],
              })(
                <Input prefix={(<Icon type="user" />)} placeholder="Name" />
              )
            }
          </Form.Item>
          <Form.Item label="性别" labelCol={{span: 6}} wrapperCol={{span:16}}>
            {
              this.props.form.getFieldDecorator('sex', {
                rules:[
                  { required: true, message: '选择性别' }
                ]
              })(
                <Select placeholder="性别">
                  <Select.Option value='男'>男</Select.Option>
                  <Select.Option value='女'>女</Select.Option>
                </Select>
              )
            }
          </Form.Item>
          <Form.Item label="学号" labelCol={{span: 6}} wrapperCol={{span:16}}>
            {
              this.props.form.getFieldDecorator('studentNumber', {
                rules: [
                  { required: true, message: '填写学号' }
                ]
              })(
                <Input prefix={(<Icon type="solution" />)} placeholder="学号" />
              )
            }
          </Form.Item>
          <Form.Item label="年级" labelCol={{span: 6}} wrapperCol={{span:16}}>
            {
              this.props.form.getFieldDecorator('grade', {
                rules:[
                  {required: true, message: '选择班级'}
                ]
              })(
                <Cascader options={cascaderOptions} placeholder='年级' />
              )
            }
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({
  onValuesChange: (props: IAddStudentComponentProps, allValues: IAddStudentComponentFormData) => {
    const keys = Object.keys(allValues);
    keys.forEach(e => {
      if (e === 'grade') {
        const [ gradeId, classId ] = allValues[e];
        props.student.gradeId = gradeId;
        props.student.classId = classId;
      } else if (e === 'sex') {
        props.student.sex = allValues[e] === '男' ? 1 : 2;
      } else {
        props.student[e] = allValues[e]
      }
    })
    // tslint:disable-next-line:no-console
    console.log(props.student)
  }
})(AddStudentComponent);
import * as React from "react";
import { Select } from "antd";
import { IGradeAndClassSelectProps, IGradeAndClassSelectState } from "./gradeAndClassSelectComponent.type";
import { Grade } from "../../../../entity/grade";
import { ClassNum } from "../../../../entity/class";

import './gradeAndClassSelect.css';

class GradeAndClassSelectComponent extends React.Component<IGradeAndClassSelectProps, IGradeAndClassSelectState> {

  
  public state: IGradeAndClassSelectState = {
    garde: -1,
    classNum: -1
  }

  private privateCurrentGrade: Grade;

  get currentGrade () {
    if (this.props.defaultGrade && !this.privateCurrentGrade) {
      const tempGrade = this.getGradeById(this.props.defaultGrade);
      if (tempGrade) {
        this.privateCurrentGrade = tempGrade;
      }
    }
    return this.privateCurrentGrade;
  }

  set currentGrade (value: Grade) {
    this.privateCurrentGrade = value;
  } 

  public componentDidMount () {
    this.setState({
      garde: this.props.defaultGrade || -1,
      classNum: this.props.defalutClass || -1
    })
  }

  public gradeChange = (value: string) => {
    this.setState({
      garde: +value,
      classNum: -1
    });
    this.currentGrade = this.getGradeById(+value) as Grade;
    this.sendGradeAndClassNum(+value, -1);
  }

  public classChange = (value: string) => {
    this.setState({
      classNum: +value
    });
    this.sendGradeAndClassNum(this.state.garde, +value);
  }

  public sendGradeAndClassNum(gradeId: number, classId: number) {
    if (this.props.receiveGradeAndClass) {
      this.props.receiveGradeAndClass(gradeId, classId);
    }
  }

  public getClassNameById = (classId: number): string | undefined => {
    if (!this.currentGrade) {
      return undefined;
    }
    return (this.currentGrade.classes.find(e => e.id === classId) as ClassNum).className as string;
  }

  public getGradeById = (gradeId: number): Grade | undefined => {
    return (this.props.gradeMessage as Grade[]).find(e => e.id === gradeId);
  }


  public render() {

    const gradeOptions = (this.props.gradeMessage as Grade[]).map((value, index) => (<Select.Option value={value.id} key={value.id}>{value.gradeName}</Select.Option>));

    let classOptions: JSX.Element[] = [];
    if (this.currentGrade) {
      classOptions = this.currentGrade.classes.map((value, index) => (<Select.Option value={value.id} key={value.id}>{value.className}</Select.Option>))
    }

    const component = this.props.canChange ? (
      <>
        <Select style={{ width: this.props.selectWidth || 200 }}
                size={this.props.selectSize || "default"}
                defaultValue={ this.state.garde !== -1 ? this.currentGrade ? this.currentGrade.gradeName: undefined : undefined }
                placeholder='Grade'
                onChange={this.gradeChange}>
          {gradeOptions}
        </Select>
        <Select style={{ width: this.props.selectWidth || 200 }}
                size={this.props.selectSize || "default"}
                value={ this.state.classNum !== -1 ? this.getClassNameById(this.state.classNum) : undefined }
                defaultValue={ this.state.classNum !== -1 ? `${this.state.classNum}` : undefined} placeholder='Class'
                onChange={this.classChange}>
          {classOptions}
        </Select>
      </>
    ) : (
      <>
        {(this.state.garde !== -1) && (this.state.classNum !== -1) ? <span>{`${this.currentGrade ? 
                                                                        this.currentGrade.gradeName : 
                                                                        '' 
                                                                      }${this.getClassNameById(this.state.classNum)}`}</span> 
                                                                   : '不可修改状态必须指定班级和年级'}
      </>
    )

    return (
      <div className="grade-wrapper">
        {component}
      </div>
    )
  }
}

export default GradeAndClassSelectComponent;
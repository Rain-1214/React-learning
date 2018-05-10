import * as React from "react";
import { Button, Select } from "antd";
import { IGradeAndClassSelectProps, IGradeAndClassSelectState } from "./gradeAndClassSelectComponent.type";
import { Grade } from "../../../../entity/grade";

import './gradeAndClassSelect.css';

class GradeAndClassSelectComponent extends React.Component<IGradeAndClassSelectProps, IGradeAndClassSelectState> {

  public componentWillReceiveProps(nextProps: IGradeAndClassSelectProps) {
    // tslint:disable-next-line:no-console
    console.log(nextProps)
  }

  public componentDidMount () {
    // tslint:disable-next-line:no-console
    console.log(this.props)
  }


  public render() {

    const gradeOptions = (this.props.gradeMessage as Grade[]).map((value, index) => (<Select.Option value={value.id} key={value.id}>{value.gradeName}</Select.Option>));

    const classOptions = this.props.defalutClass ? ((this.props.gradeMessage as Grade[])
                                                   .find(e => e.id === this.props.defalutClass) as Grade)
                                                   .classes.map((value, index) => (<Select.Option value={value.id} key={value.id}>{value.className}</Select.Option>)) :
                                                   []


    return (
      <div className="grade-wrapper">
        <Select defaultValue={ this.props.defaultGrade ? `${this.props.defaultGrade}` : undefined} placeholder='Grade'>
          {gradeOptions}
        </Select>
        <Select defaultValue={ this.props.defaultGrade ? `${this.props.defaultGrade}` : undefined} placeholder='Class'>
          {classOptions}
        </Select>
        <Button type="primary">
          查找
        </Button>
      </div>
    )
  }
}

export default GradeAndClassSelectComponent;
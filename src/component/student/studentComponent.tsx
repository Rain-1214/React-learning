import * as React from "react";
import StudentComponentStyle from './studentComponent.module.scss';
import { IStudentComponentProps } from "./studentComponent.type";

class StudentComponent extends React.Component<IStudentComponentProps> {


  public render () {

    return (
      <div>
        <div className={StudentComponentStyle.userInfo}>
          用户名:{this.props.username}  身份:{this.props.userRole}
        </div>
      </div>
    )
  }
}

export default StudentComponent;
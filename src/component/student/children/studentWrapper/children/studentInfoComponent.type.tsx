import { Student } from "../../../../../entity/student";
import { FormComponentProps } from "antd/lib/form";
import { IStudentInfoContainerMapState } from "../../../../../containers/stuentInfo/studentInfoContainer.type";

export interface IStudentInfoComponentProps extends FormComponentProps, IStudentInfoContainerMapState {
  student: Student;
  selectVisible: boolean;
  refreshStudent: (page?: number) => void;
  selectChange: (selectFlag: boolean, currentStudent: Student) => void;
}

export interface IStudentInfoComponentState {
  studentCopy: Student;
  canModify: boolean;
  checkboxText: string;
  modifyVisible: boolean;
  submitModifyStudentFlag: boolean;
}
import { Student } from "../../../../../entity/student";
import { FormComponentProps } from "antd/lib/form";

export interface IStudentInfoComponentProps extends FormComponentProps {
  student: Student;
}

export interface IStudentInfoComponentState {
  studentCopy: Student;
  canModify: boolean;
}
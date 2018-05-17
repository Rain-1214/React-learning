import { FormComponentProps } from "antd/lib/form";
import { Student } from "../../../../../entity/student";
import { Grade } from "../../../../../entity/grade";

export interface IAddStudentComponentProps extends FormComponentProps {
  student: Student;
  gradeMesage: Grade[];
  selectVisible: boolean;
  studentIndex: number;
  reseiveStudentIndex: (index: number, selectFlag: boolean) => void;
}

export interface IAddStudentComponentState {
  selectProps: boolean;
}

export interface IAddStudentComponentFormData {
  name: string;
  sex: string;
  studentNumber: string;
  grade: number[];
}
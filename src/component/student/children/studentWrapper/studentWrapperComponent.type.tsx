import { Student } from "../../../../entity/student";

export interface IStudentWrapperComponentProps {
  studnets: Student[];
  selectVisible: boolean;
  selectChange: (selectFlag: boolean, currentStudent: Student) => void;
  refreshStudent: (page?: number) => void;
}
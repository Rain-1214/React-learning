import { Student } from "../../../../entity/student";
import { Grade } from "../../../../entity/grade";

export interface IAddStudentWrapperComponentProps {
  students: Student[];
  gradeMessage: Grade[];
  selectVisible: boolean;
  reseiveStudentIndex: (index: number, selectFlag: boolean) => void;
}
import { Student } from "../../../../entity/student";
import { Grade } from "../../../../entity/grade";

export interface IAddStudentWrapperComponentProps {
  students: Student[];
  gradeMessage: Grade[];
  selectVisible: boolean;
  addSingleStudent: (index: number) => void;
  deleteAddStudent: (index: number) => void;
  reseiveStudentIndex: (index: number, selectFlag: boolean) => void;
}
import { Grade } from "../../entity/grade";

export interface IStudentContainerMapState {
  username: string;
  userRole: string;
  gradeMessage: Grade[];
}

export interface IStudentContainerMapDispatch {
  getGrade: () => void;
}
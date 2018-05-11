import { IStudentContainerMapState, IStudentContainerMapDispatch } from "../../containers/student/studentContainer.type";
import { Student } from "../../entity/student";

export interface IStudentComponentProps extends IStudentContainerMapState, IStudentContainerMapDispatch {

}

export interface IStudentComponentState {
  students: Student[]
}
import { Action } from "redux";
import { Grade } from "../../../entity/grade";

export interface IGetGradeAction extends Action {
  
}

export interface IGetGradeSuccessAction extends Action {
  gradeMessage: Grade[]
}
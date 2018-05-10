import { IGetGradeAction, IGetGradeSuccessAction } from "./getGradeActions.type";
import { ActionsTypes } from "../allActionsType";
import { Grade } from "../../../entity/grade";

export const getGradeAction = (): IGetGradeAction => {
  return {
    type: ActionsTypes.GET_GRADE
  }
}

export const getGradeSuccessAction = (gradeMessage: Grade[]): IGetGradeSuccessAction => {
  return {
    type: ActionsTypes.GET_GRADE_SUCCESS,
    gradeMessage
  }
}
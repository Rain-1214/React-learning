import { Reducer } from "redux";
import { IStudentState } from "./studentReducer.type";
import { IGetGradeSuccessAction } from "../../actions/getGradeActions/getGradeActions.type";
import { ActionsTypes } from "../../actions/allActionsType";

const defaultState = {
  gradeMessage: []
}

const student: Reducer = (state: IStudentState = defaultState, action: IGetGradeSuccessAction) => {
  // tslint:disable-next-line:no-console
  console.log(action);
  switch (action.type) {
    case ActionsTypes.GET_GRADE_SUCCESS:
      return {
        ...state,
        gradeMessage: action.gradeMessage
      };
    default: return state;
  }
}

export default student;
import { Epic } from "redux-observable";
import { Action } from "redux";
import { IStoreState } from "../../index.type";
import { ActionsTypes } from "../../actions/allActionsType";
import { StudentService } from "../../../api/student/studentService";
import { IGetGradeAction } from "../../actions/getGradeActions/getGradeActions.type";
import { getGradeSuccessAction } from "../../actions/getGradeActions/getGradeActions";
import { handleErrorAction } from "../../actions/common/handleError";
import { Observable } from "rxjs/Observable";

const studentEpic: Epic<Action, IStoreState> = (action$, store) => {
  return action$.ofType(ActionsTypes.GET_GRADE)
                .switchMap((action: IGetGradeAction) => (
                  StudentService.getGrade()
                                .map(res => (
                                  res.data.stateCode === 1 ?
                                  getGradeSuccessAction(res.data.data) :
                                  handleErrorAction('get grade ajax error', res.data.message, new Date().getTime())
                                ))
                                .catch((error: Error) => (
                                  Observable.of(handleErrorAction('get grade ajax error', error.message, new Date().getTime()))
                                ))
                ))
}

export default studentEpic;
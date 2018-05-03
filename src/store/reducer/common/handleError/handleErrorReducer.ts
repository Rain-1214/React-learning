import { Reducer } from "redux";
import { ActionsTypes } from "../../../actions/allActionsType";
import { IHandleErrorActionType } from "../../../actions/common/handleError/index.type";
import { IHandleErrorState } from "./handleErrorReducer.type";

const defaultState: IHandleErrorState = {
  errorType: '',
  errorMessage: '',
  time: 0
}

const handleError: Reducer = (state: IHandleErrorState = defaultState, action: IHandleErrorActionType) => {
  switch (action.type) {
    case ActionsTypes.HANDLE_ERROR:
      return {
        ...state,
        errorType: action.errorType,
        errorMessage: action.errorMessage,
        time: action.time
      }
    default: return state;
  }
}

export default handleError;
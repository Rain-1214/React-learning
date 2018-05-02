import { Reducer } from "redux";
import { IHandleErrorState } from './handleError.type';
import { ActionsTypes } from "../../../actions/allActionsType";
import { IHandleErrorActionType } from "../../../actions/common/handleError/index.type";

const defaultState: IHandleErrorState = {
  errorType: '',
  errorMessage: ''
}

const handleError: Reducer = (state: IHandleErrorState = defaultState, action: IHandleErrorActionType) => {
  switch (action.type) {
    case ActionsTypes.HANDLE_ERROR:
      return {
        ...state,
        errorType: action.errorType,
        errorMessage: action.errorMessage
      }
    default: return state;
  }
}

export default handleError;
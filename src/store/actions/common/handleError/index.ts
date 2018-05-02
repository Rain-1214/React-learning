import { ActionsTypes } from "../../allActionsType";
import { IHandleErrorActionType } from "./index.type";

export const handleError = (errorType: string, errorMessage: string): IHandleErrorActionType => {
  return {
    type: ActionsTypes.HANDLE_ERROR,
    errorType,
    errorMessage
  }
}
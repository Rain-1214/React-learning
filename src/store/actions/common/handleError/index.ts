import { ActionsTypes } from "../../allActionsType";
import { IHandleErrorActionType } from "./index.type";

export const handleErrorAction = (errorType: string, errorMessage: string, time: number): IHandleErrorActionType => {
  return {
    type: ActionsTypes.HANDLE_ERROR,
    errorType,
    errorMessage,
    time
  }
}
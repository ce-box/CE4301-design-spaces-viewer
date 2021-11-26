import { AppThunkAction as ThunkAction } from './app-thunk-action';
import { RequestDataAction, SuccessDataAction, FailureDataAction } from "./data-actions";

export type DataAction = RequestDataAction | SuccessDataAction | FailureDataAction;
export type AppThunkAction<T> = ThunkAction<T>;
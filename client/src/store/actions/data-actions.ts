import { DataActionType as ActionType } from "../action-types";
import { Action as ReduxAction} from "redux";
import { Data } from "../../api/models/data";

interface DataAction extends ReduxAction<ActionType> {
    type: ActionType;
}

export interface RequestDataAction extends DataAction {
    type: ActionType.REQUEST;
}

export interface SuccessDataAction extends DataAction {
    type: ActionType.SUCCESS;
    data: Data[];
}

export interface FailureDataAction extends DataAction {
    type: ActionType.FAILURE;
    error: any;
}
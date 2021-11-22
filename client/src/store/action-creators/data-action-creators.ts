import { DataService } from './../../api/services/data-service';
import { DataActionType as ActionType } from "../action-types";
import { AppThunkAction } from "../actions/app-thunk-action";
import { DataAction as Action } from "../actions";

export class DataActionCreators {
    constructor(
        private readonly dataService: DataService
    ) { }
    request = (): AppThunkAction<Action> => async (dispatch, getState) => {
        const appState = getState();

        if (appState && appState.data) {
            this.dataService.GetAsync().then(response =>
                response)
                .then(data => {
                    dispatch({ type: ActionType.SUCCESS, data: data });
                }).catch(e =>
                    dispatch({ type: ActionType.FAILURE, startDateIndex: startDateIndex, error: e }));

            dispatch({ type: ActionType.REQUEST, startDateIndex: startDateIndex });
        }
    }
}
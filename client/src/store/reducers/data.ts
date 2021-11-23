import { Reducer as ReduxReducer } from 'redux';
import { DataActionType as ActionType } from '../action-types/';
import { DataAction as Action } from '../actions';
import { Data } from '../states';

const initialState: Data = new Data();

const Reducer: ReduxReducer<Data, Action> = (
    state: Data | undefined,
    action: Action,
): Data => {
    if (state === undefined) return initialState

    switch (action.type) {
        case ActionType.SUCCESS:
            const data = action.data;
            return {
                ...state,
                data: data,
            };
        case ActionType.FAILURE:
            const error: any = action.error;
            console.error(error)
            return {
                ...state,
                error: `Connection Failed to ${error.currentTarget.url}`
            };
       
        default:
            return state;
    }
}

export default Reducer;
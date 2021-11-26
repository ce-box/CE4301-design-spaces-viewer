import { DataService } from './../../api/services/data-service';
import { BPU } from './../../shared/bpuTypes';
import { CPU } from './../../shared/cpuTypes';
import { ISA } from './../../shared/isaTypes';
import { Benchmark } from './../../shared/benchmarkTypes';
import { DataActionType as ActionType } from "../action-types";
import { AppThunkAction } from "../actions/app-thunk-action";
import { DataAction as Action } from "../actions";
import { Container } from 'typedi';

export const actionCreators = {
    request: (selectedValues: { benchmark: Benchmark, isa: ISA, cpu: CPU, bpu: BPU }):
        AppThunkAction<Action> => async (dispatch, getState) => {
            const dataService = Container.get(DataService); 
            const appState = getState();
            if (appState && appState.data) {
                dataService.GetAsync().then(response =>
                    response)
                    .then(data => {
                        dispatch({
                            type: ActionType.SUCCESS,
                            data: data,
                            selectedValues: selectedValues
                        });
                    }).catch(e =>
                        dispatch({ type: ActionType.FAILURE, error: e }));

                dispatch({ type: ActionType.REQUEST });
            }
        }
}


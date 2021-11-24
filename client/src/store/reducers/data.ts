import { ModelData } from './../states/data';
import { ISA } from './../../shared/isaTypes';
import { Benchmark } from './../../shared/benchmarkTypes';
import { Reducer as ReduxReducer } from 'redux';
import { DataActionType as ActionType } from '../action-types/';
import { DataAction as Action } from '../actions';
import { Data } from '../states';
import { CPU } from '../../shared/cpuTypes';

const initialState: Data = new Data();

const Reducer: ReduxReducer<Data, Action> = (
    state: Data | undefined,
    action: Action,
): Data => {
    if (state === undefined) return initialState

    switch (action.type) {
        case ActionType.SUCCESS:
            const data = action.data[0];
            let presentationData: ModelData[] = [];
            for (let i = 0; i < 5; i++) {
                presentationData.push({
                    l1cacheSize: data.config.l1cacheSize[i],
                    l1cacheAssoc: data.config.l1cacheAssoc[i],
                    systemCPUNumCycles: Math.random() * 100,
                    missesCPUData: Math.random() * 100,
                    missRateTotal: Math.random() * 100,
                    missesCPUInst: Math.random() * 100,
                    missRateCPUInst: Math.random() * 100,
                    brachPredBTBMissPct: Math.random() * 100,
                    predictedBranches: Math.random() * 100,
                    branchMissPred: Math.random() * 100,
                })
            }

            return {
                isLoading: false,
                data: presentationData
            }
        case ActionType.REQUEST:
            return {
                data: state.data,
                isLoading: true,
            }
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
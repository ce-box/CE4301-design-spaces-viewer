import { ModelData } from './../states/data';
import { Reducer as ReduxReducer } from 'redux';
import { DataActionType as ActionType } from '../action-types/';
import { DataAction as Action } from '../actions';
import { Data } from '../states';
import { btbTransform, transformData } from './helper';


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
                    systemCPUNumCycles: 0,
                    missRateSize: 0,
                    missRateAssoc: 0,
                    btbMissPCT: 0,
                    btbHits: 0
                })
            }
            presentationData = transformData({
                data: data,
                presentationData: presentationData,
                benchmark: action.selectedValues.benchmark,
                isa: action.selectedValues.isa,
                cpu: action.selectedValues.cpu,
                bpu: action.selectedValues.bpu,
            })

            const btbData = btbTransform(data);

            return {
                isLoading: false,
                data: presentationData,
                dataBTB: btbData
            }
        case ActionType.REQUEST:
            return {
                data: state.data,
                isLoading: true,
                dataBTB: state.dataBTB
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
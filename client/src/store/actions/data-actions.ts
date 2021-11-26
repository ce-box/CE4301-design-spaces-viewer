import { Benchmark } from './../../shared/benchmarkTypes';
import { DataActionType as ActionType } from "../action-types";
import { Action as ReduxAction } from "redux";
import { Data } from "../../api/models/data";
import { BPU } from '../../shared/bpuTypes';
import { CPU } from '../../shared/cpuTypes';
import { ISA } from '../../shared/isaTypes';

interface DataAction extends ReduxAction<ActionType> {
    type: ActionType;
}

export interface RequestDataAction extends DataAction {
    type: ActionType.REQUEST;

}

export interface SuccessDataAction extends DataAction {
    type: ActionType.SUCCESS;
    data: Data[];
    selectedValues: {
        benchmark: Benchmark;
        isa: ISA;
        cpu: CPU;
        bpu: BPU;
    }
}

export interface FailureDataAction extends DataAction {
    type: ActionType.FAILURE;
    error: any;
}
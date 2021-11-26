import { Benchmark as BenchmarkType, ISA as ISAType, CPU as CPUType, BPU as BPUType } from "../../shared";
import { ModelData } from "../states/data";
import { Data } from '../../api/models';
import { Benchmark, ISA, CPU, BPU } from "../../api/models/data";

export default function transformData(value: {
    data: Data,
    presentationData: ModelData[],
    benchmark: BenchmarkType,
    isa: ISAType,
    cpu: CPUType,
    bpu: BPUType
}): ModelData[] {
    switch (value.benchmark) {
        case BenchmarkType.SJENG:
            return filterBenchmark({
                data: value.data.sjeng,
                presentationData: value.presentationData,
                isa: value.isa,
                cpu: value.cpu,
                bpu: value.bpu
            });
        case BenchmarkType.BLACKSCHOLES:
            return filterBenchmark({
                data: value.data.blackscholes,
                presentationData: value.presentationData,
                isa: value.isa,
                cpu: value.cpu,
                bpu: value.bpu
            });
        default:
            return value.presentationData;
    }
}

function filterBenchmark(value: {
    data: Benchmark,
    presentationData: ModelData[],
    isa: ISAType,
    cpu: CPUType,
    bpu: BPUType
}): ModelData[] {
    switch (value.isa) {
        case ISAType.ARM:
            return filterISA({
                data: value.data.arm,
                presentationData: value.presentationData,
                cpu: value.cpu,
                bpu: value.bpu
            });
        case ISAType.RISCV:
            return filterISA({
                data: value.data.riscV,
                presentationData: value.presentationData,
                cpu: value.cpu,
                bpu: value.bpu
            });
        default:
            return value.presentationData;
    }
}

function filterISA(value: {
    data: ISA,
    presentationData: ModelData[],
    cpu: CPUType,
    bpu: BPUType
}): ModelData[] {
    switch (value.cpu) {
        case CPUType.TIMING_SIMPLE:
            return filterCPU({
                data: value.data.timingSimpleCPU,
                presentationData: value.presentationData,
                bpu: value.bpu
            });
        case CPUType.TRACE_CPU:
            return filterCPU({
                data: value.data.O3CPU,
                presentationData: value.presentationData,
                bpu: value.bpu
            });
        default:
            return value.presentationData;
    }
}

function filterCPU(value: {
    data: CPU,
    presentationData: ModelData[],
    bpu: BPUType
}): ModelData[] {
    switch (value.bpu) {
        case BPUType.TWO_BIT_LOCAL:
            return filterBPU({
                data: value.data.local,
                presentationData: value.presentationData,
            });
        case BPUType.BI_MODE:
            return filterBPU({
                data: value.data.bi_mode,
                presentationData: value.presentationData,
            });
        case BPUType.TOURNAMENT:
            return filterBPU({
                data: value.data.tournament,
                presentationData: value.presentationData,
            });
        default:
            return value.presentationData;
    }
}

function filterBPU(value: {
    data: BPU,
    presentationData: ModelData[],
}): ModelData[] {
    const data = value.data.stats;
    return value.presentationData.map((item, index) => {
        item.systemCPUNumCycles = data.cpu.numCycles[index];
        item.missRateSize = data.cache.missRateSize[index];
        item.missRateAssoc = data.cache.missRateAssoc[index];
        item.brachPredBTBMissPct = data.branchPredictor.BTBMissPct;
        item.BTBHits = data.branchPredictor.BTBHits;
        return item;
    });
}
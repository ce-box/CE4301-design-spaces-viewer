import { CPU } from './../../shared/cpuTypes';
import { ISA } from '../../shared/isaTypes';
import { Benchmark } from './../../shared/benchmarkTypes';
import { BPU } from '../../shared/bpuTypes';
export interface State {
    selectedBenchmark: Benchmark;
    selectedISA: ISA;
    selectedCPU: CPU,
    selectedBPU: BPU
}
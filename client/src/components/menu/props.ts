import { Benchmark } from '../../shared/benchmarkTypes';
import { BPU } from '../../shared/bpuTypes';
import { CPU } from '../../shared/cpuTypes';
import { ISA } from '../../shared/isaTypes';
export interface Props {
    select: {
        benchmark: (item: Benchmark) => void,
        isa: (item: ISA) => void,
        cpu: (item: CPU) => void,
        bpu: (item: BPU) => void 
    } 
}
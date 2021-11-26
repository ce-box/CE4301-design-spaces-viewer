export interface CPUStats {
    numCycles: number[]
}

export interface CacheStats {
    missRateSize: number[],
    missRateAssoc: number[],
}

export interface BranchPredictorStats {
    BTBMissPct: number,
    BTBHits: number,
}

export interface Stats {
    cpu: CPUStats,
    cache: CacheStats,
    branchPredictor: BranchPredictorStats
}

export interface BPU {
    stats: Stats
}

export interface CPU {
    local: BPU
    bi_mode: BPU
    tournament: BPU
}

export interface ISA {
    timingSimpleCPU: CPU,
    O3CPU: CPU
}

export interface Benchmark {
    arm: ISA,
    riscV: ISA,
}

export interface Config {
    l1cacheSize: string[],
    l1cacheAssoc: string[],
}

export class Data {
    constructor(
        public config: Config,
        public sjeng: Benchmark,
        public blackscholes: Benchmark
    ) { }
}
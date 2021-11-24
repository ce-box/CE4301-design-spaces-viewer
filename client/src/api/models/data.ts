export interface CPUStats {
    systemCPUNumCycles: number[]
}

export interface CacheStats {
    missesCPUData: number[],
    missRateTotal: number[],
    missesCPUInst: number[],
    missRateCPUInst: number[]
}

export interface BranchPredictorStats {
    brachPredBTBMissPct: number[],
    predictedBranches: number[],
    branchMissPred: number[]
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
    twoBitLocal: BPU
    biMode: BPU
    tournament: BPU
}

export interface ISA {
    timingSimpleCPU: CPU,
    traceCPU: CPU
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
        public bzip2: Benchmark,
        public canneals: Benchmark
    ) { }
}
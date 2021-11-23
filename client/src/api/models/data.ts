interface CPUStats {
    systemCPUNumCycles: number[]
}

interface CacheStats {
    missesCPUData: number[],
    missRateTotal: number[],
    missesCPUInst: number[],
    missRateCPUInst: number[]
}

interface BranchPredictorStats {
    brachPredBTBMissPct: number[],
    predictedBranches: number[],
    branchMissPred: number[]
}

interface Stats {
    cpu: CPUStats,
    cache: CacheStats,
    branchPredictor: BranchPredictorStats
}

interface BPU {
    stats: Stats
}

interface CPU {
    twoBitLocal: BPU
    biMode: BPU
    tournament: BPU
}

interface ISA {
    timingSimpleCPU: CPU,
    traceCPU: CPU
}

interface Benchmark {
    arm: ISA,
    riscV: ISA,
}

interface Config {
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
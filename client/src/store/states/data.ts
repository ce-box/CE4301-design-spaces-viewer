export interface ModelData {
    l1cacheSize: string,
    l1cacheAssoc: string,
    systemCPUNumCycles: number,
    missesCPUData: number,
    missRateTotal: number,
    missesCPUInst: number,
    missRateCPUInst: number,
    brachPredBTBMissPct: number,
    predictedBranches: number,
    branchMissPred: number
}

export class Data {
    constructor(
        public data: ModelData[] = [],
        public error?: string,
        public isLoading: boolean = true
    ) { }
}
export interface ModelData {
    l1cacheSize: string,
    l1cacheAssoc: string,
    systemCPUNumCycles: number,
    missRateSize: number,
    missRateAssoc: number,
    brachPredBTBMissPct: number,
    BTBHits: number,
}

export class Data {
    constructor(
        public data: ModelData[] = [],
        public error?: string,
        public isLoading: boolean = true
    ) { }
}
export interface ModelData {
    l1cacheSize: string,
    l1cacheAssoc: string,
    systemCPUNumCycles: number,
    missRateSize: number,
    missRateAssoc: number,
    btbMissPCT: number,
    btbHits: number
}

export interface BTBData {
    label: string,
    btbMissPCT: number,
    btbHits: number,
}

export class Data {
    constructor(
        public data: ModelData[] = [],
        public dataBTB: BTBData[] = [],
        public error?: string,
        public isLoading: boolean = true
    ) { }
}
import { Data as ModelData} from './../../api/models';

export class Data {
    constructor(
        public data: ModelData[] = [],
        public error: string = ''
    ) { }
}
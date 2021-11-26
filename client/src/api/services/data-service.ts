import { Data } from '../models/data';
import { Service } from './service';
import { Service as Injectable } from 'typedi';
import { CPUdata } from '../data'

@Injectable()
export class DataService extends Service<Data>
{
    public async AddAsync(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async FindAsync(id: number | string): Promise<Data> {
        throw new Error(`Method not implemented id: ${id}.`);
    }

    public async GetAsync(): Promise<Data[]> {
        return new Promise((resolve, reject) => {            
            resolve([CPUdata]);
        });
    }

    public async UpdateAsync(id: number | string, item: Data): Promise<void> {
        throw new Error(`Method not implemented id: ${id} and item: ${item}.`);
    }
}
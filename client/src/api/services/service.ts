export abstract class Service<Model> {
    abstract AddAsync(item: Model): Promise<void>;
    abstract FindAsync(id: number | string): Promise<Model>;
    abstract GetAsync(): Promise<Model[]>;
    abstract UpdateAsync(id: number | string, item: Model): Promise<void>;
}
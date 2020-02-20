


export class Template implements ITemplate {
    _id?: number;
    name: string; 
    constructor(options: ITemplate) {
        this.name = options.name;
        this._id = options._id;
    }
}

export interface ITemplate {
    name: string,
    _id?: number,
}
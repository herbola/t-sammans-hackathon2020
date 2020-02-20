import * as mongoose from 'mongoose';

import * as increment from 'mongoose-auto-increment';

type TemplateSchema = ITemplate & mongoose.Document;

export interface ITemplate {
    _id: Number
    name: string,
}

export const Template: mongoose.Model<TemplateSchema> = mongoose.model("Template", new mongoose.Schema({
    name: { type: String, required: true }
})); 
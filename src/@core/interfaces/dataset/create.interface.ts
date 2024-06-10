import { IDataset } from ".";

// dataset.dto.ts
export type ICreateDataset = Omit<IDataset, '_id'>

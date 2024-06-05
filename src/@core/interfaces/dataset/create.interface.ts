import { IDataset } from ".";

// dataset.dto.ts
export interface ICreateDataset extends Omit<IDataset, '_id'> {
    // additional properties if needed
  }

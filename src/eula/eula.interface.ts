import { Document } from 'mongoose';

export interface IEula extends Document {
  readonly label: string;
  readonly eula: string;
}

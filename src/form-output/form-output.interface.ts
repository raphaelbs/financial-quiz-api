import { Document } from 'mongoose';

export interface IFormOutput extends Document {
  question: string;
  answer?: string;
  children?: IFormOutput[];
}

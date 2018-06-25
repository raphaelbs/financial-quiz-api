import { Document } from 'mongoose';

export interface IFormInput extends Document {
  type: string;
  label: string;
  required?: boolean;
  children?: IFormInput[];
}

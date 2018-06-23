import { Document } from 'mongoose';
export interface IFormInputType extends Document {
  label: string;
  value: string;
}

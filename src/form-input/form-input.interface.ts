import { Document } from 'mongoose';
import { IFormInputType } from '../form-input-type/form-input-type.interface';

export interface IFormInput extends Document {
  type: IFormInputType;
  label: string;
  key?: string;
  required?: boolean;
  children?: IFormInput[];
}

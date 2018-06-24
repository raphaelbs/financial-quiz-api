import { FormInputType } from '../form-input-type/form-input-type.schema';
import { Schema } from 'mongoose';

export const FormInput = new Schema({
  type: {
    type: FormInputType,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  children: [
    {
      type: this,
      required: false,
    },
  ],
});
import { FormInputType } from './../form-input-type/form-input-type';
import * as mongoose from 'mongoose';

export const FormInput = new mongoose.Schema({
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
    required: true,
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

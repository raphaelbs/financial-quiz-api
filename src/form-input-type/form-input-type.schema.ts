import { Schema } from 'mongoose';

export const FormInputType = new Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

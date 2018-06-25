import { Schema } from 'mongoose';

export const FormInputSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});
FormInputSchema.add({
  children: [
    {
      type: FormInputSchema,
      required: false,
    },
  ],
});

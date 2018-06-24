import { Schema } from 'mongoose';

export const FormOutputSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: false,
  },
});
FormOutputSchema.add({
  children: [{ type: FormOutputSchema, required: false }],
});

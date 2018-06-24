import { Schema } from 'mongoose';

export const FormOutput = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  children: [
    {
      type: this,
      required: false,
    },
  ],
});

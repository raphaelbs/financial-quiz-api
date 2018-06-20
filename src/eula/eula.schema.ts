import { Schema } from 'mongoose';

export const Eula = new Schema({
  label: {
    type: String,
    required: true,
  },
  eula: {
    type: String,
    required: true,
  },
});

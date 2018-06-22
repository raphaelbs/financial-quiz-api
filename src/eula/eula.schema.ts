import { Schema } from 'mongoose';

export const EulaSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  eula: {
    type: String,
    required: true,
  },
});

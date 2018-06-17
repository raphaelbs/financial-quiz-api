import * as mongoose from 'mongoose';

export const Eula = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  eula: {
    type: String,
    required: true,
  },
});

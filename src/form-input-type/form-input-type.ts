import * as mongoose from 'mongoose';

export const FormInputType = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  eula: {
    type: String,
    required: true,
  },
});

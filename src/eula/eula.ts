import * as mongoose from 'mongoose';

export const Eula = new mongoose.Schema({
  label: String,
  eula: String,
});

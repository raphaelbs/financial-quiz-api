import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  eula_accepted: {
    type: Boolean,
    required: true,
    default: false,
  },
  investment_profile: {
    type: Object,
    required: false,
    default: false,
  },
});

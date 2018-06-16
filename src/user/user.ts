import * as mongoose from 'mongoose';

export const User = new mongoose.Schema({
    eula_accepted: Boolean,
    investment_profile: Boolean,
    investment_profile_ref: String,
});
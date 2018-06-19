import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly eula_accepted: boolean;
    readonly investment_profile: boolean;
}
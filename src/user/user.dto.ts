import { IsBoolean, IsAlphanumeric } from 'class-validator';

export class IUserDto {
  @IsAlphanumeric() readonly id: string;
  @IsBoolean() readonly eula_accepted?: boolean;
  @IsBoolean() readonly investment_profile?: boolean;
}

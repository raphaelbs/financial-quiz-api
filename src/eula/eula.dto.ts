import { IsBoolean, IsAlphanumeric } from 'class-validator';
export class IEulaDto {
  @IsAlphanumeric() readonly id: string;
  @IsBoolean() readonly label: string;
  @IsBoolean() readonly eula: string;
}

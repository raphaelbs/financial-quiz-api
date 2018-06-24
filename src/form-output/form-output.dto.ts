import { Document } from 'mongoose';
import { IsString, IsArray, IsEmpty } from 'class-validator';

export class IFormOutputDto {
  @IsString() readonly question: string;
  @IsString()
  @IsEmpty()
  readonly answer?: string;
  @IsEmpty()
  @IsArray()
  readonly children?: IFormOutputDto[];
}

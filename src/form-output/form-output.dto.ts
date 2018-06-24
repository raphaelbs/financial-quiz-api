import { Document } from 'mongoose';
import { IsString, IsArray } from 'class-validator';

export class IFormOutputDto {
  @IsString() readonly question: string;
  @IsString() answer?: string;
  @IsArray() children?: IFormOutputDto[];
}

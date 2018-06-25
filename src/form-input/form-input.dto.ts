import { IsString, IsArray, IsEmpty, IsBoolean } from 'class-validator';

export class IFormInputDto {
  @IsString() readonly type: string;
  @IsString() readonly label: string;
  @IsBoolean()
  @IsEmpty()
  readonly required?: boolean;
  @IsEmpty()
  @IsArray()
  readonly children?: IFormInputDto[];
}

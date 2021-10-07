import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTuitDto {
  @ApiProperty()
  @IsString()
  readonly message: string;
}

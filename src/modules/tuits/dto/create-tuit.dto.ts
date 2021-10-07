import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTuitDto {
  @ApiProperty()
  @IsString()
  readonly message: string;
}

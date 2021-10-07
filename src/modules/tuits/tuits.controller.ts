import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';

@Controller('api/tuits')
export class TuitsController {
  constructor(private readonly tuitsService: TuitsService) {}

  @Get()
  getTuits(): Tuit[] {
    return this.tuitsService.getTuits();
  }

  @Get(':id')
  getTuit(@Param('id') id: string): Tuit {
    return this.tuitsService.getTuit(id);
  }

  @Post()
  createTuit(@Body() message: CreateTuitDto): void {
    return this.tuitsService.createTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit: UpdateTuitDto): Tuit {
    return this.tuitsService.updateTuit(id, tuit);
  }

  @Delete(':id')
  removeTuit(@Param('id') id: string): void {
    return this.tuitsService.removeTuit(id);
  }
}

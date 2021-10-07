import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';

import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
  private tuits: Tuit[] = [
    {
      id: '1',
      message: 'hola mundo',
    },
  ];

  getTuits(): Tuit[] {
    return this.tuits;
  }

  getTuit(id: string): Tuit {
    const tuit = this.tuits.find((item) => item.id === id);
    if (!tuit) {
      throw new NotFoundException('Resource not found');
    }
    return tuit;
  }

  createTuit({ message }: CreateTuitDto) {
    console.log('hola mi gente');

    this.tuits.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }

  updateTuit(id: string, { message }: UpdateTuitDto): Tuit {
    const tuit: Tuit = this.getTuit(id);
    tuit.message = message;
    return tuit;
  }

  removeTuit(id: string) {
    const index = this.tuits.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.tuits.splice(index, 1);
    }
  }
}

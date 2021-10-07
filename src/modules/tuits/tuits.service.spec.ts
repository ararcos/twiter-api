import { Test, TestingModule } from '@nestjs/testing';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

describe('TuitsService', () => {
  let service: TuitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuitsService],
    }).compile();

    service = module.get<TuitsService>(TuitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should get all tuit', () => {
    const tuits: Tuit[] = service.getTuits();
    expect(tuits.find((element) => element.id === '1')).toEqual({
      id: '1',
      message: 'hola mundo',
    });
  });
});

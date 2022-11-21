import { Test, TestingModule } from '@nestjs/testing';
import { PokemonAbilitiesController } from './pokemon-abilities.controller';

describe('PokemonAbilitiesController', () => {
  let controller: PokemonAbilitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonAbilitiesController],
    }).compile();

    controller = module.get<PokemonAbilitiesController>(PokemonAbilitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

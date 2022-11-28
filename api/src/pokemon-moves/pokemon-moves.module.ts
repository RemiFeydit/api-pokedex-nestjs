import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { PokemonMovesController } from './controller/pokemon-moves.controller';
import { PokemonMovesEntity } from './pokemon-moves.entity';
import { PokemonMovesService } from './service/pokemon-moves.service';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonMovesEntity]), PokemonsModule],
  controllers: [PokemonMovesController],
  providers: [PokemonMovesService]
})
export class PokemonMovesModule {}

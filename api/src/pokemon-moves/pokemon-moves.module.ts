import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovesModule } from 'src/moves/moves.module';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { PokemonMovesController } from './controller/pokemon-moves.controller';
import { PokemonMovesEntity } from './pokemon-moves.entity';
import { PokemonMovesService } from './service/pokemon-moves.service';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonMovesEntity]), PokemonsModule, MovesModule],
  controllers: [PokemonMovesController],
  providers: [PokemonMovesService]
})
export class PokemonMovesModule {}

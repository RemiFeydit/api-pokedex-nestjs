import { Module } from '@nestjs/common';
import { PokemonTypesService } from './service/pokemon-types.service';
import { PokemonTypesController } from './controller/pokemon-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { TypesModule } from 'src/types/types.module';
import { PokemonTypesEntity } from './pokemon-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonTypesEntity]), PokemonsModule, TypesModule],
  providers: [PokemonTypesService],
  controllers: [PokemonTypesController]
})
export class PokemonTypesModule {}

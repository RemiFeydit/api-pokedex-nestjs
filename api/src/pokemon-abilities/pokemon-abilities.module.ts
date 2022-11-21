import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilitiesModule } from 'src/abilities/abilities.module';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { PokemonAbilitiesController } from './controller/pokemon-abilities.controller';
import { PokemonAbilitiesEntity } from './pokemon-abilities.entity';
import { PokemonAbilitiesService } from './service/pokemon-abilities.service';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonAbilitiesEntity]), PokemonsModule, AbilitiesModule],
  controllers: [PokemonAbilitiesController],
  providers: [PokemonAbilitiesService]
})
export class PokemonAbilitiesModule {}

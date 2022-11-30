import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityModule } from 'src/ability/ability.module';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { PokemonAbilityController } from './controller/pokemon-ability.controller';
import { PokemonAbilityEntity } from './pokemon-ability.entity';
import { PokemonAbilityService } from './service/pokemon-ability.service';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonAbilityEntity]), PokemonModule, AbilityModule],
  controllers: [PokemonAbilityController],
  providers: [PokemonAbilityService]
})
export class PokemonAbilityModule {}

import { Module } from '@nestjs/common';
import { PokemonTypesService } from './service/pokemon-type.service';
import { PokemonTypesController } from './controller/pokemon-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { TypeModule } from 'src/type/type.module';
import { PokemonTypeEntity } from './pokemon-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonTypeEntity]), PokemonModule, TypeModule],
  providers: [PokemonTypesService],
  controllers: [PokemonTypesController]
})
export class PokemonTypeModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './pokemon.entity';
import { PokemonController } from './controller/pokemon.controller';
import { PokemonService } from './service/pokemon.service';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity])],
  providers: [PokemonService],
  controllers: [PokemonController],
  exports: [PokemonService]
  
})
export class PokemonModule {}

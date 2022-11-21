import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsEntity } from './pokemons.entity';
import { PokemonsController } from './controller/pokemons.controller';
import { PokemonsService } from './service/pokemons.service';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonsEntity])],
  providers: [PokemonsService],
  controllers: [PokemonsController],
  exports: [PokemonsService]
  
})
export class PokemonsModule {}

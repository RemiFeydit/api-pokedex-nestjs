import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoveModule } from 'src/move/move.module';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { PokemonMoveController } from './controller/pokemon-move.controller';
import { PokemonMoveEntity } from './pokemon-move.entity';
import { PokemonMoveService } from './service/pokemon-move.service';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonMoveEntity]), PokemonModule, MoveModule],
  controllers: [PokemonMoveController],
  providers: [PokemonMoveService]
})
export class PokemonMoveModule {}

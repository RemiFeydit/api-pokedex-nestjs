import { Module } from '@nestjs/common';
import { BaseStatService } from './service/base-stat.service';
import { BaseStatController } from './controller/base-stat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseStatEntity } from './base-stat.entity';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  imports: [TypeOrmModule.forFeature([BaseStatEntity]), PokemonModule],
  providers: [BaseStatService],
  controllers: [BaseStatController]
})
export class BaseStatModule {
}

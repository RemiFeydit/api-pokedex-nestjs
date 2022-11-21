import { Module } from '@nestjs/common';
import { BaseStatsService } from './service/base-stats.service';
import { BaseStatsController } from './controller/base-stats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseStatsEntity } from './base-stats.entity';
import { PokemonsModule } from 'src/pokemons/pokemons.module';

@Module({
  imports: [TypeOrmModule.forFeature([BaseStatsEntity]), PokemonsModule],
  providers: [BaseStatsService],
  controllers: [BaseStatsController]
})
export class BaseStatsModule {
}

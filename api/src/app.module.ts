import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from './pokemons/pokemons.module';
import { MovesModule } from './moves/moves.module';
import { TypesModule } from './types/types.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { BaseStatsModule } from './base-stats/base-stats.module';
import { PokemonAbilitiesModule } from './pokemon-abilities/pokemon-abilities.module';
@Module({
  imports: [PokemonsModule,
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "pokemonDB.db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    MovesModule,
    TypesModule,
    AbilitiesModule,
    BaseStatsModule,
    PokemonAbilitiesModule,
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}

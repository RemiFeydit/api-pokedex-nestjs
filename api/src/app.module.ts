import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsModule } from './pokemons/pokemons.module';
import { MovesModule } from './moves/moves.module';
import { TypesModule } from './types/types.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { BaseStatsModule } from './base-stats/base-stats.module';
import { PokemonAbilitiesModule } from './pokemon-abilities/pokemon-abilities.module';
import { PokemonTypesModule } from './pokemon-types/pokemon-types.module';
import { PokemonMovesController } from './pokemon-moves/controller/pokemon-moves.controller';
import { PokemonMovesService } from './pokemon-moves/service/pokemon-moves.service';
import { PokemonMovesModule } from './pokemon-moves/pokemon-moves.module';
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
    PokemonTypesModule,
    PokemonMovesModule,
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}

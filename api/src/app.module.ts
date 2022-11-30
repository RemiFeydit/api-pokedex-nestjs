import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { MoveModule } from './move/move.module';
import { TypeModule } from './type/type.module';
import { AbilityModule } from './ability/ability.module';
import { BaseStatModule } from './base-stat/base-stat.module';
import { PokemonAbilityModule } from './pokemon-ability/pokemon-ability.module';
import { PokemonTypeModule } from './pokemon-type/pokemon-type.module';
import { PokemonMoveModule } from './pokemon-move/pokemon-move.module';
@Module({
  imports: [PokemonModule,
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "pokemonDB.db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    MoveModule,
    TypeModule,
    AbilityModule,
    BaseStatModule,
    PokemonAbilityModule,
    PokemonTypeModule,
    PokemonMoveModule,
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}

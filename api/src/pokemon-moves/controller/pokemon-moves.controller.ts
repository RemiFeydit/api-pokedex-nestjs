import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PokemonsService } from 'src/pokemons/service/pokemons.service';
import { ApiTags } from '@nestjs/swagger';
import { PokemonMovesEntity } from '../pokemon-moves.entity';
import { MovesService } from 'src/moves/service/moves.service';
import { PokemonMovesService } from '../service/pokemon-moves.service';

@ApiTags("PokemonsMoves")
@Controller('pokemon-moves')
export class PokemonMovesController {
    constructor(private PokemonMoveService: PokemonMovesService, private MovesService : MovesService, private PokemonsService: PokemonsService){}

    @Get()
    async GetAll(): Promise<PokemonMovesEntity[]>{
        return await this.PokemonMoveService.getAll()
    }

    @Post("pokemon/:pokemon/move/:move")
    async Create(@Body() pokemonMoves: PokemonMovesEntity, @Param("pokemon") pokemon : string, @Param("move") move : string): Promise<PokemonMovesEntity> {
        console.log(pokemonMoves);
        return await this.PokemonMoveService.create(pokemonMoves, await this.PokemonsService.getPokemonIdByName(pokemon), await this.MovesService.getMoveIdByName(move));
    }
}

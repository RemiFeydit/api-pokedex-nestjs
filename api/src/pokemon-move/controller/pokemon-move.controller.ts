import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PokemonService } from 'src/pokemon/service/pokemon.service';
import { ApiTags } from '@nestjs/swagger';
import { PokemonMoveEntity } from '../pokemon-move.entity';
import { MoveService } from 'src/move/service/move.service';
import { PokemonMoveService } from '../service/pokemon-move.service';

@ApiTags("pokemon-move")
@Controller('pokemon-move')
export class PokemonMoveController {
    constructor(private PokemonMoveService: PokemonMoveService, private MoveService : MoveService, private PokemonService: PokemonService){}

    @Get()
    async GetAll(): Promise<PokemonMoveEntity[]>{
        return await this.PokemonMoveService.getAll()
    }

    @Post("pokemon/:pokemon/move/:move")
    async Create(@Body() pokemonMoves: PokemonMoveEntity, @Param("pokemon") pokemon : string, @Param("move") move : string): Promise<PokemonMoveEntity> {
        console.log(pokemonMoves);
        return await this.PokemonMoveService.create(pokemonMoves, await this.PokemonService.getPokemonIdByName(pokemon), await this.MoveService.getMoveIdByName(move));
    }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PokemonEntity } from '../pokemon.entity';
import { PokemonService } from '../service/pokemon.service';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
    constructor(private PokemonService: PokemonService){}

    @Get()
    async GetAll(): Promise<PokemonEntity[]>{
        return await this.PokemonService.getAll()
    }

    @Post()
    async Create(@Body() pokemon: PokemonEntity): Promise<PokemonEntity> {
        console.log(pokemon);
        return await this.PokemonService.create(pokemon);
    }

    @Get("/:pokemonName")
    @ApiParam({name: "pokemonName"})
    async GetPokemonIdByName(@Param("pokemonName") type: string): Promise<PokemonEntity>{
        return await this.PokemonService.getPokemonIdByName(type)
    }
}

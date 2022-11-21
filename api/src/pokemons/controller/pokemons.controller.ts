import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PokemonsEntity } from '../pokemons.entity';
import { PokemonsService } from '../service/pokemons.service';

@ApiTags('Pokemons')
@Controller('pokemons')
export class PokemonsController {
    constructor(private PokemonsService: PokemonsService){}

    @Get()
    async GetAll(): Promise<PokemonsEntity[]>{
        return await this.PokemonsService.getAll()
    }

    @Post()
    async Create(@Body() pokemon: PokemonsEntity): Promise<PokemonsEntity> {
        console.log(pokemon);
        return await this.PokemonsService.create(pokemon);
    }

    @Get("/:pokemonName")
    @ApiParam({name: "pokemonName"})
    async GetPokemonIdByName(@Param("pokemonName") type: string): Promise<PokemonsEntity>{
        return await this.PokemonsService.getPokemonIdByName(type)
    }
}

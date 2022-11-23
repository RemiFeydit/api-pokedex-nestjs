import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PokemonTypesEntity } from '../pokemon-types.entity';
import { PokemonTypesService } from '../service/pokemon-types.service';
import { TypesService } from 'src/types/service/types.service';
import { PokemonsService } from 'src/pokemons/service/pokemons.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("PokemonTypes")
@Controller('pokemon-types')
export class PokemonTypesController {
    constructor(private PokemonTypesService: PokemonTypesService, private TypesService : TypesService, private PokemonsService: PokemonsService){}

    @Get()
    async GetAll(): Promise<PokemonTypesEntity[]>{
        return await this.PokemonTypesService.getAll()
    }

    @Post("pokemon/:pokemon/type/:type")
    async Create(@Body() pokemonTypes: PokemonTypesEntity, @Param("pokemon") pokemon : string, @Param("type") type : string): Promise<PokemonTypesEntity> {
        console.log(pokemonTypes);
        return await this.PokemonTypesService.create(pokemonTypes, await this.PokemonsService.getPokemonIdByName(pokemon), await this.TypesService.getTypeIdByName(type));
    }
}

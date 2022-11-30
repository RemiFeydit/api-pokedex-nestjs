import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PokemonTypeEntity } from '../pokemon-type.entity';
import { PokemonTypesService } from '../service/pokemon-type.service';
import { TypeService } from 'src/type/service/type.service';
import { PokemonService } from 'src/pokemon/service/pokemon.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("pokemon-type")
@Controller('pokemon-type')
export class PokemonTypesController {
    constructor(private PokemonTypesService: PokemonTypesService, private TypesService : TypeService, private PokemonsService: PokemonService){}

    @Get()
    async GetAll(): Promise<PokemonTypeEntity[]>{
        return await this.PokemonTypesService.getAll()
    }

    @Post("pokemon/:pokemon/type/:type")
    async Create(@Body() pokemonTypes: PokemonTypeEntity, @Param("pokemon") pokemon : string, @Param("type") type : string): Promise<PokemonTypeEntity> {
        console.log(pokemonTypes);
        return await this.PokemonTypesService.create(pokemonTypes, await this.PokemonsService.getPokemonIdByName(pokemon), await this.TypesService.getTypeIdByName(type));
    }
}

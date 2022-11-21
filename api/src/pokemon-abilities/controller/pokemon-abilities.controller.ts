import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AbilitiesService } from 'src/abilities/service/abilities.service';
import { PokemonsEntity } from 'src/pokemons/pokemons.entity';
import { PokemonsService } from 'src/pokemons/service/pokemons.service';
import { PokemonAbilitiesEntity } from '../pokemon-abilities.entity';
import { PokemonAbilitiesService } from '../service/pokemon-abilities.service';

@ApiTags("PokemonAbilities")
@Controller('pokemon-abilities')
export class PokemonAbilitiesController {
    constructor(private PokemonAbilitiesService: PokemonAbilitiesService, private AbilitiesService : AbilitiesService, private PokemonsService: PokemonsService){}

    @Get()
    async GetAll(): Promise<PokemonAbilitiesEntity[]>{
        return await this.PokemonAbilitiesService.getAll()
    }

    @Post("pokemon/:pokemon/ability/:ability")
    async Create(@Body() pokemonAbilities: PokemonAbilitiesEntity, @Param("pokemon") pokemon : string, @Param("ability") ability : string): Promise<PokemonAbilitiesEntity> {
        console.log(pokemonAbilities);
        return await this.PokemonAbilitiesService.create(pokemonAbilities, await this.PokemonsService.getPokemonIdByName(pokemon), await this.AbilitiesService.getAbilitiesIdByName(ability));
    }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AbilityService } from 'src/ability/service/ability.service';
import { PokemonService } from 'src/pokemon/service/pokemon.service';
import { PokemonAbilityEntity } from '../pokemon-ability.entity';
import { PokemonAbilityService } from '../service/pokemon-ability.service';

@ApiTags("pokemon-ability")
@Controller('pokemon-ability')
export class PokemonAbilityController {
    constructor(private PokemonAbilityService: PokemonAbilityService, private AbilityService : AbilityService, private PokemonService: PokemonService){}

    @Get()
    async GetAll(): Promise<PokemonAbilityEntity[]>{
        return await this.PokemonAbilityService.getAll()
    }

    @Post("pokemon/:pokemon/ability/:ability")
    async Create(@Body() pokemonAbilities: PokemonAbilityEntity, @Param("pokemon") pokemon : string, @Param("ability") ability : string): Promise<PokemonAbilityEntity> {
        console.log(pokemonAbilities);
        return await this.PokemonAbilityService.create(pokemonAbilities, await this.PokemonService.getPokemonIdByName(pokemon), await this.AbilityService.getAbilityIdByName(ability));
    }
}

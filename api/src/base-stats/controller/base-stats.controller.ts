import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PokemonsEntity } from 'src/pokemons/pokemons.entity';
import { PokemonsService } from 'src/pokemons/service/pokemons.service';
import { BaseStatsEntity } from '../base-stats.entity';
import { BaseStatsService } from '../service/base-stats.service';

@ApiTags('Base Stats')
@Controller('base-stats')
export class BaseStatsController {
    constructor(private BaseStatsService : BaseStatsService, private PokemonService: PokemonsService){}

    @Get()
    async GetAll() : Promise<BaseStatsEntity[]>{
        return await this.BaseStatsService.getAll()
    }

    @Post(":pokemonName")
    @ApiParam({name: "pokemonName"})
    async Create(@Body() baseStats: BaseStatsEntity, @Param("pokemonName") pokemon: string): Promise<BaseStatsEntity>{
        return await this.BaseStatsService.create(baseStats, await this.PokemonService.getPokemonIdByName(pokemon))
    }
}

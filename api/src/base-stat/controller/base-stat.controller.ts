import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PokemonService } from 'src/pokemon/service/pokemon.service';
import { BaseStatEntity } from '../base-stat.entity';
import { BaseStatService } from '../service/base-stat.service';

@ApiTags('base-stat')
@Controller('base-stat')
export class BaseStatController {
    constructor(private BaseStatService : BaseStatService, private PokemonService: PokemonService){}

    @Get()
    async GetAll() : Promise<BaseStatEntity[]>{
        return await this.BaseStatService.getAll()
    }

    @Post(":pokemonName")
    @ApiParam({name: "pokemonName"})
    async Create(@Body() baseStats: BaseStatEntity, @Param("pokemonName") pokemon: string): Promise<BaseStatEntity>{
        return await this.BaseStatService.create(baseStats, await this.PokemonService.getPokemonIdByName(pokemon))
    }
}

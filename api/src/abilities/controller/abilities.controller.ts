import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AbilitiesEntity } from '../abilities.entity';
import { AbilitiesService } from '../service/abilities.service';

@ApiTags('Abilities')
@Controller('abilities')
export class AbilitiesController {
    constructor(private AbilitiesService: AbilitiesService){}

    @Get()
    async GetAll(): Promise<AbilitiesEntity[]>{
        return await this.AbilitiesService.getAll()
    }

    @Post()
    async Create(@Body() ability: AbilitiesEntity) : Promise<AbilitiesEntity>{
        return await this.AbilitiesService.create(ability)
    }

    @Get('/:abilitiesName')
    @ApiParam({name: "AbilitiesName"})
    async GetAbilitiesName(@Param("AbilitiesName") ability: string) : Promise<AbilitiesEntity>{
        return await this.AbilitiesService.getAbilitiesIdByName(ability)
    }
}

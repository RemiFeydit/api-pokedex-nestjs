import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AbilityEntity } from '../ability.entity';
import { AbilityService } from '../service/ability.service';

@ApiTags('ability')
@Controller('ability')
export class AbilityController {
    constructor(private AbilityService: AbilityService){}

    @Get()
    async GetAll(): Promise<AbilityEntity[]>{
        return await this.AbilityService.getAll()
    }

    @Post()
    async Create(@Body() ability: AbilityEntity) : Promise<AbilityEntity>{
        return await this.AbilityService.create(ability)
    }

    @Get('/:ability_name')
    @ApiParam({name: "ability_name"})
    async GetAbilitiesName(@Param("ability_name") ability: string) : Promise<AbilityEntity>{
        return await this.AbilityService.getAbilityIdByName(ability)
    }
}

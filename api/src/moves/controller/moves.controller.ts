import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { TypesService } from 'src/types/service/types.service';
import { MovesEntity } from '../moves.entity';
import { MovesService } from '../service/moves.service';


@ApiTags('Moves')
@Controller('moves')
export class MovesController {
    constructor(private MovesService: MovesService, private TypesService: TypesService){}

    @Get()
    async GetAll(): Promise<MovesEntity[]>{
        return await this.MovesService.getAll()
    }

    @Post(":moveName")
    @ApiParam({name: "moveName"})
    async Create(@Body() pokemon: MovesEntity, @Param("moveName") type : string): Promise<MovesEntity> {
        return await this.MovesService.create(pokemon, await this.TypesService.getTypeIdByName(type));
    }

    @Get('/:moveName')
    @ApiParam({name: "moveName"})
    async GetAbilitiesName(@Param("moveName") moveName: string) : Promise<MovesEntity>{
        return await this.MovesService.getMoveIdByName(moveName)
    }
}

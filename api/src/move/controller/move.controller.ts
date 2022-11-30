import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { TypeService } from 'src/type/service/type.service';
import { MoveEntity } from '../move.entity';
import { MoveService } from '../service/move.service';


@ApiTags('move')
@Controller('move')
export class MoveController {
    constructor(private MoveService: MoveService, private TypesService: TypeService){}

    @Get()
    async GetAll(): Promise<MoveEntity[]>{
        return await this.MoveService.getAll()
    }

    @Post(":type_name")
    @ApiParam({name: "type_name"})
    async Create(@Body() pokemon: MoveEntity, @Param("type_name") type : string): Promise<MoveEntity> {
        return await this.MoveService.create(pokemon, await this.TypesService.getTypeIdByName(type));
    }

    @Get('/:type_name')
    @ApiParam({name: "type_name"})
    async GetAbilitiesName(@Param("type_name") moveName: string) : Promise<MoveEntity>{
        return await this.MoveService.getMoveIdByName(moveName)
    }
}

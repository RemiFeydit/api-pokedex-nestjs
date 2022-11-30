import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { TypeEntity } from '../type.entity';
import { TypeService } from '../service/type.service';

@ApiTags('type')
@Controller('type')
export class TypeController {
    constructor(private TypeService: TypeService){}

    @Get()
    async GetAll(): Promise<TypeEntity[]>{
        return await this.TypeService.getAll()
    }

    @Post()
    async Create(@Body() type: TypeEntity): Promise<TypeEntity> {
        return await this.TypeService.create(type);
    }

    @Get("/:typeName")
    @ApiParam({name: "typeName"})
    async GetTypeByName(@Param("typeName") type: string): Promise<TypeEntity>{
        return await this.TypeService.getTypeIdByName(type)
    }
}

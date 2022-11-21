import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { TypesEntity } from '../types.entity';
import { TypesService } from '../service/types.service';

@ApiTags('Types')
@Controller('types')
export class TypesController {
    constructor(private TypeService: TypesService){}

    @Get()
    async GetAll(): Promise<TypesEntity[]>{
        return await this.TypeService.getAll()
    }

    @Post()
    async Create(@Body() type: TypesEntity): Promise<TypesEntity> {
        return await this.TypeService.create(type);
    }

    @Get("/:typeName")
    @ApiParam({name: "typeName"})
    async GetTypeByName(@Param("typeName") type: string): Promise<TypesEntity>{
        return await this.TypeService.getTypeByName(type)
    }
}

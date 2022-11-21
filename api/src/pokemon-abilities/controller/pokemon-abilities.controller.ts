import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonAbilitiesEntity } from '../pokemon-abilities.entity';
import { PokemonAbilitiesService } from '../service/pokemon-abilities.service';

@ApiTags("PokemonAbilities")
@Controller('pokemon-abilities')
export class PokemonAbilitiesController {
    constructor(private PokemonsService: PokemonAbilitiesService){}

    @Get()
    async GetAll(): Promise<PokemonAbilitiesEntity[]>{
        return await this.PokemonsService.getAll()
    }
}

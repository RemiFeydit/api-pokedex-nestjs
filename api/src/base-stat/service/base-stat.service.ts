import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from 'src/pokemon/pokemon.entity';
import { Repository } from 'typeorm';
import { BaseStatEntity } from '../base-stat.entity';

@Injectable()
export class BaseStatService {
    constructor(@InjectRepository(BaseStatEntity) private BaseStatsRepository: Repository<BaseStatEntity>){}

    async getAll(): Promise<BaseStatEntity[]>{
        return await this.BaseStatsRepository.find()
    }

    async create(baseStat: BaseStatEntity, pokemon: PokemonEntity): Promise<BaseStatEntity>{
        baseStat.pokemons = pokemon
        console.log(baseStat);
        return this.BaseStatsRepository.save(baseStat)
    }
}

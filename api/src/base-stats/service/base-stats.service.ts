import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonsEntity } from 'src/pokemons/pokemons.entity';
import { Repository } from 'typeorm';
import { BaseStatsEntity } from '../base-stats.entity';

@Injectable()
export class BaseStatsService {
    constructor(@InjectRepository(BaseStatsEntity) private BaseStatsRepository: Repository<BaseStatsEntity>){}

    async getAll(): Promise<BaseStatsEntity[]>{
        return await this.BaseStatsRepository.find()
    }

    async create(baseStat: BaseStatsEntity, pokemon: PokemonsEntity): Promise<BaseStatsEntity>{
        baseStat.pokemons = pokemon
        console.log(baseStat);
        return this.BaseStatsRepository.save(baseStat)
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonAbilitiesEntity } from '../pokemon-abilities.entity';

@Injectable()
export class PokemonAbilitiesService {
    constructor(@InjectRepository(PokemonAbilitiesEntity) private PokemonRepository: Repository<PokemonAbilitiesEntity>){}

    async getAll(): Promise<PokemonAbilitiesEntity[]> {
        return await this.PokemonRepository.find()
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonEntity } from '../pokemon.entity';

@Injectable()
export class PokemonService {
    constructor(@InjectRepository(PokemonEntity) private PokemonRepository: Repository<PokemonEntity>){}

    async getAll(): Promise<PokemonEntity[]> {
        return await this.PokemonRepository.find()
    }

    async create(pokemon: PokemonEntity): Promise<PokemonEntity> {
            return await this.PokemonRepository.save(pokemon);
    }

    async getPokemonIdByName(pokemon: string): Promise<PokemonEntity> {
        return await this.PokemonRepository.findOne({
            where: {
                pokemon_name: pokemon
            }
        })
    }
}

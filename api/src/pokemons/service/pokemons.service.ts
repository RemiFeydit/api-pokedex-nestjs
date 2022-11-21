import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonsEntity } from '../pokemons.entity';

@Injectable()
export class PokemonsService {
    constructor(@InjectRepository(PokemonsEntity) private PokemonRepository: Repository<PokemonsEntity>){}

    async getAll(): Promise<PokemonsEntity[]> {
        return await this.PokemonRepository.find()
    }

    async create(pokemon: PokemonsEntity): Promise<PokemonsEntity> {
            return await this.PokemonRepository.save(pokemon);
    }

    async getPokemonIdByName(pokemon: string): Promise<PokemonsEntity> {
        return await this.PokemonRepository.findOne({
            where: {
                PokemonName: pokemon
            }
        })
    }
}

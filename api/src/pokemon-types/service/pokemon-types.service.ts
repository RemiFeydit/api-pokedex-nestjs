import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonsEntity } from 'src/pokemons/pokemons.entity';
import { TypesEntity } from 'src/types/types.entity';
import { Repository } from 'typeorm';
import { PokemonTypesEntity } from '../pokemon-types.entity';

@Injectable()
export class PokemonTypesService {
    constructor(@InjectRepository(PokemonTypesEntity) private PokemonTypesRepository: Repository<PokemonTypesEntity>){}

    async getAll(): Promise<PokemonTypesEntity[]> {
        return await this.PokemonTypesRepository.find()
    }

    async create(pokemonTypes: PokemonTypesEntity, pokemon: PokemonsEntity, type: TypesEntity): Promise<PokemonTypesEntity>{
        pokemonTypes.types = type
        pokemonTypes.pokemons = pokemon
        console.log(pokemonTypes);
        return await this.PokemonTypesRepository.save(pokemonTypes)
    }
}

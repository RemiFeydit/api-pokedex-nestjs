import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from 'src/pokemon/pokemon.entity';
import { TypeEntity } from 'src/type/type.entity';
import { Repository } from 'typeorm';
import { PokemonTypeEntity } from '../pokemon-type.entity';

@Injectable()
export class PokemonTypesService {
    constructor(@InjectRepository(PokemonTypeEntity) private PokemonTypesRepository: Repository<PokemonTypeEntity>){}

    async getAll(): Promise<PokemonTypeEntity[]> {
        return await this.PokemonTypesRepository.find()
    }

    async create(pokemonTypes: PokemonTypeEntity, pokemon: PokemonEntity, type: TypeEntity): Promise<PokemonTypeEntity>{
        pokemonTypes.types = type
        pokemonTypes.pokemons = pokemon
        console.log(pokemonTypes);
        return await this.PokemonTypesRepository.save(pokemonTypes)
    }
}

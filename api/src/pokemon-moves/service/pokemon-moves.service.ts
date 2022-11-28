import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovesEntity } from 'src/moves/moves.entity';
import { PokemonsEntity } from 'src/pokemons/pokemons.entity';
import { Repository } from 'typeorm';
import { PokemonMovesEntity } from '../pokemon-moves.entity';

@Injectable()
export class PokemonMovesService {
    constructor(@InjectRepository(PokemonMovesEntity) private PokemonTypesRepository: Repository<PokemonMovesEntity>){}

    async getAll(): Promise<PokemonMovesEntity[]> {
        return await this.PokemonTypesRepository.find()
    }

    async create(pokemonTypes: PokemonMovesEntity, pokemon: PokemonsEntity, move: MovesEntity): Promise<PokemonMovesEntity>{
        pokemonTypes.moves = move
        pokemonTypes.pokemons = pokemon
        console.log(pokemonTypes);
        return await this.PokemonTypesRepository.save(pokemonTypes)
    }
}

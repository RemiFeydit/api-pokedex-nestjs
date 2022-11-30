import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoveEntity } from 'src/move/move.entity';
import { PokemonEntity } from 'src/pokemon/pokemon.entity';
import { Repository } from 'typeorm';
import { PokemonMoveEntity } from '../pokemon-move.entity';

@Injectable()
export class PokemonMoveService {
    constructor(@InjectRepository(PokemonMoveEntity) private PokemonMoveRepository: Repository<PokemonMoveEntity>){}

    async getAll(): Promise<PokemonMoveEntity[]> {
        return await this.PokemonMoveRepository.find()
    }

    async create(pokemonMove: PokemonMoveEntity, pokemon: PokemonEntity, move: MoveEntity): Promise<PokemonMoveEntity>{
        pokemonMove.moves = move
        pokemonMove.pokemons = pokemon
        console.log(pokemonMove);
        return await this.PokemonMoveRepository.save(pokemonMove)
    }
}

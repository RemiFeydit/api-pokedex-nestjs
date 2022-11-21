import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbilitiesEntity } from 'src/abilities/abilities.entity';
import { PokemonsEntity } from 'src/pokemons/pokemons.entity';
import { Repository } from 'typeorm';
import { PokemonAbilitiesEntity } from '../pokemon-abilities.entity';

@Injectable()
export class PokemonAbilitiesService {
    constructor(@InjectRepository(PokemonAbilitiesEntity) private PokemonAbilitiesRepository: Repository<PokemonAbilitiesEntity>){}

    async getAll(): Promise<PokemonAbilitiesEntity[]> {
        return await this.PokemonAbilitiesRepository.find()
    }

    async create(pokemonAbilities: PokemonAbilitiesEntity, pokemon: PokemonsEntity, ability: AbilitiesEntity): Promise<PokemonAbilitiesEntity>{
        pokemonAbilities.abilities = ability
        pokemonAbilities.pokemons = pokemon
        console.log(pokemonAbilities);
        return await this.PokemonAbilitiesRepository.save(pokemonAbilities)
    }
}

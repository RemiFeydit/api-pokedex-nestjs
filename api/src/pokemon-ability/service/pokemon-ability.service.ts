import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbilityEntity } from 'src/ability/ability.entity';
import { PokemonEntity } from 'src/pokemon/pokemon.entity';
import { Repository } from 'typeorm';
import { PokemonAbilityEntity } from '../pokemon-ability.entity';

@Injectable()
export class PokemonAbilityService {
    constructor(@InjectRepository(PokemonAbilityEntity) private PokemonAbilityRepository: Repository<PokemonAbilityEntity>){}

    async getAll(): Promise<PokemonAbilityEntity[]> {
        return await this.PokemonAbilityRepository.find()
    }

    async create(pokemonAbilities: PokemonAbilityEntity, pokemon: PokemonEntity, ability: AbilityEntity): Promise<PokemonAbilityEntity>{
        pokemonAbilities.abilities = ability
        pokemonAbilities.pokemons = pokemon
        console.log(pokemonAbilities);
        return await this.PokemonAbilityRepository.save(pokemonAbilities)
    }
}

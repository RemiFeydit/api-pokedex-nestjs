import { ApiProperty } from "@nestjs/swagger"
import { PokemonAbilityEntity } from "src/pokemon-ability/pokemon-ability.entity"
import { PokemonMoveEntity } from "src/pokemon-move/pokemon-move.entity"
import { PokemonTypeEntity } from "src/pokemon-type/pokemon-type.entity"
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"

@Entity("pokemon")
export class PokemonEntity {
    @PrimaryGeneratedColumn()
    pokemon_id: number

    @Column({unique: true})
    @ApiProperty({
      description: "The number in the pokedex of the pokemon",
      default: 25
    })
    pokemon_pokedex_number: number

    @Column({ unique: true })
    @ApiProperty({
        description: 'The name of the pokemon',
        default: "Pikachu",
      })
    pokemon_name: string

    @Column()
    @ApiProperty({
        description: 'The height of the pokemon',
        default: 0.4,
      })
    pokemon_height: number

    @Column()
    @ApiProperty({
        description: 'The weight of the pokemon',
        default: 6,
      })
    pokemon_weight: number
    @Column({nullable: true})
    @ApiProperty({
      description: "The description of the pokemon",
    })
    pokemon_description : string

    @OneToMany(() => PokemonAbilityEntity, pokemonAbilities => pokemonAbilities.pokemons)
    public PokemonAbilities!: PokemonAbilityEntity[];

    @OneToMany(() => PokemonTypeEntity, pokemonTypes => pokemonTypes.pokemons)
    public PokemonTypes!: PokemonTypeEntity[];

    @OneToMany(() => PokemonMoveEntity, pokemonMoves => pokemonMoves.pokemons)
    public PokemonMoves!: PokemonMoveEntity[];
}

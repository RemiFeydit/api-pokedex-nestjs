import { ApiProperty } from "@nestjs/swagger"
import { PokemonAbilitiesEntity } from "src/pokemon-abilities/pokemon-abilities.entity"
import { PokemonMovesEntity } from "src/pokemon-moves/pokemon-moves.entity"
import { PokemonTypesEntity } from "src/pokemon-types/pokemon-types.entity"
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"

@Entity("Pokemons")
export class PokemonsEntity {
    @PrimaryGeneratedColumn()
    PokemonId: number

    @Column({ unique: true })
    @ApiProperty({
        description: 'The name of the pokemon',
        default: "Pikachu",
      })
    PokemonName: string

    @Column()
    @ApiProperty({
        description: 'The height of the pokemon',
        default: 0.4,
      })
    PokemonHeight: number

    @Column()
    @ApiProperty({
        description: 'The weight of the pokemon',
        default: 6,
      })
    PokemonWeight: number
    @Column({nullable: true})
    @ApiProperty({
      description: "The description of the pokemon",
    })
    PokemonDescription : string

    @OneToMany(() => PokemonAbilitiesEntity, pokemonAbilities => pokemonAbilities.pokemons)
    public PokemonAbilities!: PokemonAbilitiesEntity[];

    @OneToMany(() => PokemonAbilitiesEntity, pokemonTypes => pokemonTypes.pokemons)
    public PokemonTypes!: PokemonTypesEntity[];

    @OneToMany(() => PokemonMovesEntity, pokemonMoves => pokemonMoves.pokemons)
    public PokemonMoves!: PokemonMovesEntity[];
}

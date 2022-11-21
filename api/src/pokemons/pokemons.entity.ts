import { ApiProperty } from "@nestjs/swagger"
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"

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
}

import { ApiProperty } from "@nestjs/swagger";
import { PokemonAbilitiesEntity } from "src/pokemon-abilities/pokemon-abilities.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Abilities")
export class AbilitiesEntity {
    @PrimaryGeneratedColumn()
    AbilitiesId: number

    @Column()
    @ApiProperty(
        {
            description: "The name of the ability",
            default: "Engrais"
        }
    )
    AbilitiesName: string

    @Column()
    @ApiProperty({
        description: "The Description of the ability",
        default: "Augmente des trucs"
    })
    AbilitiesDescription: string

    @OneToMany(() => PokemonAbilitiesEntity, pokemonAbilities => pokemonAbilities.abilities)
    public PokemonAbilities!: PokemonAbilitiesEntity[];
}

import { ApiProperty } from "@nestjs/swagger";
import { PokemonAbilityEntity } from "src/pokemon-ability/pokemon-ability.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("ability")
export class AbilityEntity {
    @PrimaryGeneratedColumn()
    ability_id: number

    @Column()
    @ApiProperty(
        {
            description: "The name of the ability",
            default: "Engrais"
        }
    )
    ability_name: string

    @Column()
    @ApiProperty({
        description: "The Description of the ability",
        default: "Augmente des trucs"
    })
    ability_description: string

    @OneToMany(() => PokemonAbilityEntity, pokemonAbilities => pokemonAbilities.abilities)
    public PokemonAbilities!: PokemonAbilityEntity[];
}

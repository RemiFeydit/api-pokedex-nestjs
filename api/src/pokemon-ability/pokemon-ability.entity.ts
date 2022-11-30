import { ApiProperty } from "@nestjs/swagger";
import { AbilityEntity } from "src/ability/ability.entity";
import { PokemonEntity } from "src/pokemon/pokemon.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemon_ability")
export class PokemonAbilityEntity {
    @PrimaryGeneratedColumn()
    pokemon_ability_id : number

    @Column({
        type: Boolean,
        default: false,
     })
    @ApiProperty({
        description: "Define if the ability is hidden or not"
    })
    is_hidden: boolean
    
    @Column()
    @ApiProperty({
        description:"the slot of the ability"
    })
    slot: number

    @ManyToOne(() => PokemonEntity, (pokemon) => pokemon.PokemonAbilities)
    @JoinColumn({ name: "pokemon_id", referencedColumnName: "pokemon_id" })
    public pokemons!: PokemonEntity

    @ManyToOne(() => AbilityEntity, (ability) => ability.PokemonAbilities)
    @JoinColumn({ name: "ability_id", referencedColumnName: "ability_id" })
    public abilities!: AbilityEntity
}

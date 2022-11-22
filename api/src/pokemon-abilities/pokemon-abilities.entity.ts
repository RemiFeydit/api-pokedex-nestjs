import { ApiProperty } from "@nestjs/swagger";
import { AbilitiesEntity } from "src/abilities/abilities.entity";
import { PokemonsEntity } from "src/pokemons/pokemons.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("PokemonAbilities")
export class PokemonAbilitiesEntity {
    @PrimaryGeneratedColumn()
    PokemonAbilitiesId : number
    @ManyToOne(() => PokemonsEntity, (pokemon) => pokemon.PokemonAbilities)
    @JoinColumn({name: "PokemonId"})
    public pokemons!: PokemonsEntity

    @ManyToOne(() => AbilitiesEntity, (ability) => ability.PokemonAbilities)
    @JoinColumn({name: "AbilitiesId"})
    public abilities!: AbilitiesEntity

    @Column()
    @ApiProperty({
        description: "Define if the ability is hidden or not"
    })
    IsHidden: boolean
    
    @Column()
    @ApiProperty({
        description:"the slot of the ability"
    })
    Slot: number
}

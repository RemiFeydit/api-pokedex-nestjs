import { ApiProperty } from "@nestjs/swagger";
import { AbilitiesEntity } from "src/abilities/abilities.entity";
import { PokemonsEntity } from "src/pokemons/pokemons.entity";
import { TypesEntity } from "src/types/types.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("PokemonAbilities")
export class PokemonTypesEntity {
    @PrimaryGeneratedColumn()
    PokemonAbilitiesId : number
    @ManyToOne(() => PokemonsEntity, (pokemon) => pokemon.PokemonAbilities)
    @JoinColumn({name: "PokemonId"})
    public pokemons!: PokemonsEntity

    @ManyToOne(() => TypesEntity, (ability) => ability.PokemonTypes)
    @JoinColumn({name: "TypesId"})
    public types!: TypesEntity
    
    @Column()
    @ApiProperty({
        description:"the slot of the ability"
    })
    Slot: number
}

import { ApiProperty } from "@nestjs/swagger";
import { AbilitiesEntity } from "src/abilities/abilities.entity";
import { PokemonsEntity } from "src/pokemons/pokemons.entity";
import { TypesEntity } from "src/types/types.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("PokemonTypes")
export class PokemonTypesEntity {
    @PrimaryGeneratedColumn()
    PokemonAbilitiesId : number

    @Column()
    @ApiProperty({
        description:"the slot of the type"
    })
    Slot: number

    @ManyToOne(() => PokemonsEntity, (pokemon) => pokemon.PokemonAbilities)
    @JoinColumn({name: "PokemonId", referencedColumnName: "PokemonId"})
    public pokemons!: PokemonsEntity

    @ManyToOne(() => TypesEntity, (ability) => ability.PokemonTypes)
    @JoinColumn({name: "TypesId", referencedColumnName: "TypeId"})
    public types!: TypesEntity
    
    
}

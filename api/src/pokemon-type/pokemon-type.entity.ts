import { ApiProperty } from "@nestjs/swagger";
import { PokemonEntity } from "src/pokemon/pokemon.entity";
import { TypeEntity } from "src/type/type.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemon_type")
export class PokemonTypeEntity {
    @PrimaryGeneratedColumn()
    pokemon_type_id : number

    @Column()
    @ApiProperty({
        description:"the slot of the type"
    })
    slot: number

    @ManyToOne(() => PokemonEntity, (pokemon) => pokemon.PokemonAbilities)
    @JoinColumn({name: "pokemon_id", referencedColumnName: "pokemon_id"})
    public pokemons!: PokemonEntity

    @ManyToOne(() => TypeEntity, (ability) => ability.PokemonTypes)
    @JoinColumn({name: "type_id", referencedColumnName: "type_id"})
    public types!: TypeEntity
    
    
}

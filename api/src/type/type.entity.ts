import { ApiProperty } from "@nestjs/swagger";
import { MoveEntity } from "src/move/move.entity";
import { PokemonTypeEntity } from "src/pokemon-type/pokemon-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("type")
export class TypeEntity {
    @PrimaryGeneratedColumn()
    type_id: number

    @Column({unique: true})
    @ApiProperty({
        description: 'The name of the type',
        default: "Acier",
    })
    type_name: string

    @OneToMany(() => MoveEntity, (move) => move.type)
    moves: MoveEntity[]

    @OneToMany(() => PokemonTypeEntity, pokemonType => pokemonType.types)
    public PokemonTypes!: PokemonTypeEntity[];
}

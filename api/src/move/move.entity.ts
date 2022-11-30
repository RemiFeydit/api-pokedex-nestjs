import { ApiProperty } from "@nestjs/swagger";
import { PokemonMoveEntity } from "src/pokemon-move/pokemon-move.entity";
import { TypeEntity } from "src/type/type.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("move")
export class MoveEntity {
    @PrimaryGeneratedColumn()
    move_id: number

    @Column({ unique: true })
    @ApiProperty({
        description: "The name of the move",
        default: "Charge"
    })
    move_name: string

    @Column()
    @ApiProperty({
        description: "The category of the move",
        default: "Physique"
    })
    move_category: string

    @Column({type: 'int', nullable: true})
    @ApiProperty({
        description: "The power of the move",
        default: 40
    })
    move_power: number

    @Column()
    @ApiProperty({
        description: "The PP of the move",
        default: 35
    })
    move_pp: number

    @Column({type: 'int', nullable: true})
    @ApiProperty({
        description: "The accuracy of the move",
        default: 100
    })
    move_accuracy: number

    @Column()
    @ApiProperty({
        description: "The description of the move"
    })
    move_description: string

    @ManyToOne(() => TypeEntity, (type) => type.moves)
    @JoinColumn({name: "type_id", referencedColumnName: "type_id"})
    type: TypeEntity

    @OneToMany(() => PokemonMoveEntity, pokemonMoves => pokemonMoves.pokemons)
    public PokemonMoves!: PokemonMoveEntity[];
}

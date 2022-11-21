import { ApiProperty } from "@nestjs/swagger";
import { TypesEntity } from "src/types/types.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Moves")
export class MovesEntity {
    @PrimaryGeneratedColumn()
    Moveid: number

    @Column({ unique: true })
    @ApiProperty({
        description: "The name of the move",
        default: "Charge"
    })
    MoveName: string

    @Column()
    @ApiProperty({
        description: "The category of the move",
        default: "Physique"
    })
    MoveCategory: string

    @Column({type: 'int', nullable: true})
    @ApiProperty({
        description: "The power of the move",
        default: 40
    })
    MovePower: number

    @Column()
    @ApiProperty({
        description: "The PP of the move",
        default: 35
    })
    MovePP: number

    @Column({type: 'int', nullable: true})
    @ApiProperty({
        description: "The accuracy of the move",
        default: 100
    })
    MoveAccuracy: number

    @Column()
    @ApiProperty({
        description: "The description of the move"
    })
    MoveDescription: string

    @ManyToOne(() => TypesEntity, (type) => type.moves)
    @JoinColumn({name: "TypeId"})
    type: TypesEntity
}

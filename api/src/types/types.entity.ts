import { ApiProperty } from "@nestjs/swagger";
import { MovesEntity } from "src/moves/moves.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Types")
export class TypesEntity {
    @PrimaryGeneratedColumn()
    TypeId: number

    @Column()
    @ApiProperty({
        description: 'The name of the type',
        default: "Acier",
    })
    TypeName: string

    @OneToMany(() => MovesEntity, (move) => move.move)
    moves: MovesEntity[]
}

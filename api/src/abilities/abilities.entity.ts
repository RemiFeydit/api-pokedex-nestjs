import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Abilities")
export class AbilitiesEntity {
    @PrimaryGeneratedColumn()
    AbilitiesId: number

    @Column()
    @ApiProperty(
        {
            description: "The name of the ability",
            default: "Engrais"
        }
    )
    AbilitiesName: string

    @Column()
    @ApiProperty({
        description: "The Description of the ability",
        default: "Augmente des trucs"
    })
    AbilitiesDescription: string
}

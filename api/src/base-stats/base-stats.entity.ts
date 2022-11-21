import { ApiProperty } from "@nestjs/swagger";
import { PokemonsEntity } from "src/pokemons/pokemons.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("BaseStats")
export class BaseStatsEntity {
    @PrimaryGeneratedColumn()
    BaseStatsId: Number

    @Column()
    @ApiProperty({
        description: "The HP stats of the specified pokemon",
        default: 0
    })
    BaseStatsHP: number

    @Column()
    @ApiProperty({
        description: "The Attack stats of the specified pokemon",
        default: 0
    })
    BaseStatsAttack: number

    @Column()
    @ApiProperty({
        description: "The Defense stats of the specified pokemon",
        default: 0
    })
    BaseStatsDefense: number

    @Column()
    @ApiProperty({
        description: "The Attack Spe. stats of the specified pokemon",
        default: 0
    })
    BaseStatsSpeAttack: number

    @Column()
    @ApiProperty({
        description: "The Def Spe. stats of the specified pokemon",
        default: 0
    })
    BaseStatsSpeDefense: number

    @Column()
    @ApiProperty({
        description: "The Speed stats of the specified pokemon",
        default: 0
    })
    BaseStatsSpeed: number

    @OneToOne(() => PokemonsEntity)
    @JoinColumn({ name: "PokemonId", referencedColumnName: "PokemonId" })
    pokemons: PokemonsEntity
}

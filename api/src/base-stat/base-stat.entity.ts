import { ApiProperty } from "@nestjs/swagger";
import { PokemonEntity } from "src/pokemon/pokemon.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("base_stat")
export class BaseStatEntity {
    @PrimaryGeneratedColumn()
    base_stat_id: Number

    @Column()
    @ApiProperty({
        description: "The HP stats of the specified pokemon",
        default: 0
    })
    base_stat_hp: number

    @Column()
    @ApiProperty({
        description: "The Attack stats of the specified pokemon",
        default: 0
    })
    base_stat_attack: number

    @Column()
    @ApiProperty({
        description: "The Defense stats of the specified pokemon",
        default: 0
    })
    base_stat_defense: number

    @Column()
    @ApiProperty({
        description: "The Attack Spe. stats of the specified pokemon",
        default: 0
    })
    base_stat_spe_attack: number

    @Column()
    @ApiProperty({
        description: "The Def Spe. stats of the specified pokemon",
        default: 0
    })
    base_stat_spe_defense: number

    @Column()
    @ApiProperty({
        description: "The Speed stats of the specified pokemon",
        default: 0
    })
    base_stat_speed: number

    @OneToOne(() => PokemonEntity)
    @JoinColumn({ name: "pokemon_id", referencedColumnName: "pokemon_id" })
    pokemons: PokemonEntity
}

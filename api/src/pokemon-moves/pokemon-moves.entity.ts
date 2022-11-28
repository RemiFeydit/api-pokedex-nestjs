import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("PokemonMoves")
export class PokemonMovesEntity {
    @PrimaryGeneratedColumn()
    PokemonMovesId: number

    @Column()
    LevelLearnedAt: number
}

import { MoveEntity } from "src/move/move.entity";
import { PokemonEntity } from "src/pokemon/pokemon.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemon_move")
export class PokemonMoveEntity {
    @PrimaryGeneratedColumn()
    pokemon_move_id: number
    
    @ManyToOne(() => PokemonEntity, (pokemon) => pokemon.PokemonMoves)
    @JoinColumn({name: "pokemon_id", referencedColumnName: "pokemon_id"})
    public pokemons!: PokemonEntity

    @ManyToOne(() => MoveEntity, (move) => move.PokemonMoves)
    @JoinColumn({name: "move_id", referencedColumnName: "move_id"})
    public moves!: MoveEntity
}

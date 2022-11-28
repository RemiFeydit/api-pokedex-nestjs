import { MovesEntity } from "src/moves/moves.entity";
import { PokemonsEntity } from "src/pokemons/pokemons.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("PokemonMoves")
export class PokemonMovesEntity {
    @PrimaryGeneratedColumn()
    PokemonMovesId: number
    
    @ManyToOne(() => PokemonsEntity, (pokemon) => pokemon.PokemonMoves)
    @JoinColumn({name: "PokemonId", referencedColumnName: "PokemonId"})
    public pokemons!: PokemonsEntity

    @ManyToOne(() => MovesEntity, (move) => move.PokemonMoves)
    @JoinColumn({name: "MoveId", referencedColumnName: "MoveId"})
    public moves!: MovesEntity
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypesEntity } from 'src/types/types.entity';
import { Repository } from 'typeorm';
import { MovesEntity } from '../moves.entity';

@Injectable()
export class MovesService {
    constructor(@InjectRepository(MovesEntity) private MovesRepository: Repository<MovesEntity>){}
    
    async getAll(): Promise<MovesEntity[]> {
        return await this.MovesRepository.find()
    }

    async create(move: MovesEntity, type: TypesEntity): Promise<MovesEntity>{
        move.type = type
        console.log(move);
        return this.MovesRepository.save(move)
    }

    async getMoveIdByName(move: string): Promise<MovesEntity> {
        return await this.MovesRepository.findOne({
            where: {
                MoveName: move
            }
        })
    }
}

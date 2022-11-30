import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEntity } from 'src/type/type.entity';
import { Repository } from 'typeorm';
import { MoveEntity } from '../move.entity';

@Injectable()
export class MoveService {
    constructor(@InjectRepository(MoveEntity) private MovesRepository: Repository<MoveEntity>){}
    
    async getAll(): Promise<MoveEntity[]> {
        return await this.MovesRepository.find()
    }

    async create(move: MoveEntity, type: TypeEntity): Promise<MoveEntity>{
        move.type = type
        console.log(move);
        return this.MovesRepository.save(move)
    }

    async getMoveIdByName(move: string): Promise<MoveEntity> {
        return await this.MovesRepository.findOne({
            where: {
                move_name: move
            }
        })
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeEntity } from '../type.entity';

@Injectable()
export class TypeService {
    constructor(@InjectRepository(TypeEntity) private TypesRepository: Repository<TypeEntity>){}

    async getAll(): Promise<TypeEntity[]> {
        return await this.TypesRepository.find()
    }

    async create(type: TypeEntity): Promise<TypeEntity> {
            return await this.TypesRepository.save(type);
    }

    async getTypeIdByName(type: string): Promise<TypeEntity> {
        return await this.TypesRepository.findOne({
            where: {
                type_name: type
            }
        })
}
}

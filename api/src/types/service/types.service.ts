import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypesEntity } from '../types.entity';

@Injectable()
export class TypesService {
    constructor(@InjectRepository(TypesEntity) private TypesRepository: Repository<TypesEntity>){}

    async getAll(): Promise<TypesEntity[]> {
        return await this.TypesRepository.find()
    }

    async create(type: TypesEntity): Promise<TypesEntity> {
            return await this.TypesRepository.save(type);
    }

    async getTypeByName(type: string): Promise<TypesEntity> {
        return await this.TypesRepository.findOne({
            where: {
                TypeName: type
            }
        })
}
}

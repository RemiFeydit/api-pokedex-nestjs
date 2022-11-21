import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypesEntity } from 'src/types/types.entity';
import { Repository } from 'typeorm';
import { AbilitiesEntity } from '../abilities.entity';

@Injectable()
export class AbilitiesService {
    constructor(@InjectRepository(AbilitiesEntity) private AbilitiesRepository: Repository<AbilitiesEntity>){}

    async getAll(): Promise<AbilitiesEntity[]>{
        return await this.AbilitiesRepository.find()
    }

    async create(ability: AbilitiesEntity): Promise<AbilitiesEntity>{
        console.log(ability);
        return await this.AbilitiesRepository.save(ability)
    }

    async getAbilitiesIdByName(type: string): Promise<AbilitiesEntity> {
        return await this.AbilitiesRepository.findOne({
            where: {
                AbilitiesName: type
            }
        })
    }
}

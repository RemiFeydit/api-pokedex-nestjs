import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbilityEntity } from '../ability.entity';

@Injectable()
export class AbilityService {
    constructor(@InjectRepository(AbilityEntity) private AbilityRepository: Repository<AbilityEntity>){}

    async getAll(): Promise<AbilityEntity[]>{
        return await this.AbilityRepository.find()
    }

    async create(ability: AbilityEntity): Promise<AbilityEntity>{
        console.log(ability);
        return await this.AbilityRepository.save(ability)
    }

    async getAbilityIdByName(ability: string): Promise<AbilityEntity> {
        return await this.AbilityRepository.findOne({
            where: {
                ability_name: ability
            }
        })
    }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityEntity } from './ability.entity';
import { AbilityController } from './controller/ability.controller';
import { AbilityService } from './service/ability.service';

@Module({
  imports: [TypeOrmModule.forFeature([AbilityEntity])],
  controllers: [AbilityController],
  providers: [AbilityService],
  exports: [AbilityService]
})
export class AbilityModule {}

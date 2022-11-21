import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilitiesEntity } from './abilities.entity';
import { AbilitiesController } from './controller/abilities.controller';
import { AbilitiesService } from './service/abilities.service';

@Module({
  imports: [TypeOrmModule.forFeature([AbilitiesEntity])],
  controllers: [AbilitiesController],
  providers: [AbilitiesService]
})
export class AbilitiesModule {}

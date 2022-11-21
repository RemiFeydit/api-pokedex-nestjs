import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesController } from './controller/types.controller';
import { TypesService } from './service/types.service';
import { TypesEntity } from './types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypesEntity])],
  controllers: [TypesController],
  providers: [TypesService],
  exports: [TypesService]
})
export class TypesModule {}

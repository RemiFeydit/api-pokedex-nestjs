import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeController } from './controller/type.controller';
import { TypeService } from './service/type.service';
import { TypeEntity } from './type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity])],
  controllers: [TypeController],
  providers: [TypeService],
  exports: [TypeService]
})
export class TypeModule {}

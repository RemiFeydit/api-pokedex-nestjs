import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeModule } from 'src/type/type.module';
import { MoveController } from './controller/move.controller';
import { MoveEntity } from './move.entity';
import { MoveService } from './service/move.service';

@Module({
  imports: [TypeOrmModule.forFeature([MoveEntity]), TypeModule],
  providers: [MoveService],
  controllers: [MoveController],
  exports: [MoveService]
})
export class MoveModule {}

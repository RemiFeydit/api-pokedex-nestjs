import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesModule } from 'src/types/types.module';
import { MovesController } from './controller/moves.controller';
import { MovesEntity } from './moves.entity';
import { MovesService } from './service/moves.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovesEntity]), TypesModule],
  providers: [MovesService],
  controllers: [MovesController]
})
export class MovesModule {}

import { Module } from '@nestjs/common';
import { AsistentesController } from './asistentes.controller';
import { AsistentesService } from './asistentes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistente } from './asistente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asistente])],
  controllers: [AsistentesController],
  providers: [AsistentesService],

})
export class AsistentesModule {}

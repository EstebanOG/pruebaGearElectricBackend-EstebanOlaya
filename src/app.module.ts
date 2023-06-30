import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsistentesModule } from './asistentes/asistentes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'gearserver.mysql.database.azure.com',
      port: 3306,
      username: 'gearadmin',
      password: 'admin*1234',
      database: 'asistentesdb',
      ssl:{ca:fs.readFileSync(path.join(__dirname, '../src/DigiCertGlobalRootCA.crt.pem'))},
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AsistentesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

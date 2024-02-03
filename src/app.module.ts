import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AboutController } from './controllers/about.controller';
import { AboutService } from './services/about.service';
import { AboutModule } from './module/about.module';
import { About } from './entity/about.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'personal_site',
      autoLoadEntities: true,
      entities: [About],
      synchronize: false,
    }),
    AboutModule
  ],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

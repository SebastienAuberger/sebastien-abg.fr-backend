
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutService } from 'src/services/about.service';
import { AboutController } from 'src/controllers/about.controller';
import { About } from 'src/entity/about.entity';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  exports: [TypeOrmModule],
  providers: [AboutService],
  controllers: [AboutController],
})
export class AboutModule {}

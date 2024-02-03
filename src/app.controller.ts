import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("About")
@Controller("about")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAbout(): string {
    return this.appService.getAbout();
  }
}

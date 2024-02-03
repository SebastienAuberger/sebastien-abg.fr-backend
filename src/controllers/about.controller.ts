import { Controller, Get } from '@nestjs/common';
import { AboutService } from 'src/services/about.service';
import { ApiTags } from '@nestjs/swagger';
import { About } from 'src/entity/about.entity';

@ApiTags("About")
@Controller("about")
export class AboutController {
  constructor(private readonly appService: AboutService) {}

  @Get()
  async getAbout(): Promise<About> {
    return await this.appService.findSelected();
  }
}
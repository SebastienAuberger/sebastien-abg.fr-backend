import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AboutService } from 'src/services/about.service';
import { ApiTags } from '@nestjs/swagger';
import { About } from 'src/entity/about.entity';

@ApiTags("About")
@Controller("about")
export class AboutController {
  constructor(private readonly appService: AboutService) {}

  @Get("selected")
  async getAboutSelected(): Promise<About> {
    return await this.appService.findSelected();
  }

  @Get("selected/:id")
  async setSelected(@Param("id") id: number): Promise<void> {
    return await this.appService.setSelected(id);
  }

  @Get()
  async getAbouts(): Promise<About[]> {
    return await this.appService.findAll();
  }

  @Get(":id")
  async getAbout(@Param("id") id: number): Promise<About> {
    return await this.appService.findOne(id);
  }

  @Delete(":id")
  async deleteAbouts(@Param("id") id: number): Promise<void> {
    return await this.appService.remove(id);
  }

  @Post()
  async addAbout(@Body() about: About): Promise<About> {
    return await this.appService.add(about);
  }
}
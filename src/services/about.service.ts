
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { About } from 'src/entity/about.entity';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ) {}

  findAll(): Promise<About[]> {
    return this.aboutRepository.find();
  }

  findOne(id: number): Promise<About | null> {
    return this.aboutRepository.findOneBy({ id });
  }

  findSelected(): Promise<About | null> {
    return this.aboutRepository.findOneBy({ selected: true });
  }

  async remove(id: number): Promise<void> {
    await this.aboutRepository.delete(id);
  }
}

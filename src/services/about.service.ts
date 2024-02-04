
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

  async setSelected(id : number):  Promise<void> {
    let currentSelected = await this.aboutRepository.findOneBy({ selected: true });
    await this.aboutRepository.update(currentSelected.id,{"selected": false})
    await this.aboutRepository.update(id,{"selected": true})
    return
  }

  async remove(id: number): Promise<void> {
    await this.aboutRepository.delete(id);
  }

  async add(about : About): Promise<any> {
     let res = await this.aboutRepository.insert(about);
     return {
        "id": res.identifiers[0].id,
        "value": about.value,
        "selected": about.selected
     }
  }
}

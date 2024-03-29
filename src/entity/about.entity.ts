
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  value: string;

  @ApiProperty()
  @Column()
  selected: boolean;
}

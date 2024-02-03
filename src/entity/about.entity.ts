
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  selected: boolean;
}

import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Answer } from './answer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false })
  text: string;

  @OneToMany(() => Answer, answer => answer.questionId)
  answers: Answer[];
}

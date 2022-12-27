import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Answer } from './answer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false })
  question: string;

  @Column({type: 'boolean', nullable: true})
  isCorrect: boolean;

  @OneToMany(() => Answer, answer => answer.questionId)
  answers: Answer[];
  
}

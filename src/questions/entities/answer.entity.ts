import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', nullable: false })
  answer: string;

  @ManyToOne(() => Question, question => question.answers)
  questionId: number;
}
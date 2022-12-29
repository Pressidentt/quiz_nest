import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  text: string;

  @Column({ type: 'boolean', nullable: true })
  isCorrect: boolean;

  @Column({ type: 'int', nullable: true })
  questionId: number;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'questionId' })
  relatedQuestion: Question;
}
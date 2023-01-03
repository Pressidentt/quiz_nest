import { Answer } from './entities/answer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Answer) private answerRepository: Repository<Answer>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    return await this.questionRepository.save(createQuestionDto);
  }

  async findAll() {
    return await this.questionRepository.find({
      relations: {
        answers: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.questionRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, data: any) {
    const question = await this.questionRepository.findOne({
      where: { id },
      relations: {
        answers: true,
      },
    });
    question.text = data.text;
    question.feedback = data.feedback;
    question.score = data.score;

    for (let i = 0; i < question.answers.length; i++) {
      await this.answerRepository.remove(question.answers[i]);
    }
    await this.questionRepository.save(question);

    const questionId = id;
    const answers: Answer[] = [];
    const answersFromUser = data.answers;
    for (let i = 0; i < answersFromUser.length; i++) {
      answers.push(
        this.answerRepository.create({
          text: data.answers[i].text,
          isCorrect: data.answers[i].isCorrect,
          questionId: questionId,
        }),
      );
    }
    await this.dataSource.manager.save(answers);
    return await this.questionRepository.findOne({
      where: { id: questionId },
      relations: {
        answers: true,
      },
    });
  }

  async remove(id: number) {
    const question = await this.questionRepository.findOne({
      where: { id },
      relations: {
        answers: true,
      },
    });
    await this.answerRepository.remove(question.answers);
    return await this.questionRepository.remove(question);
  }

  async questionMassInsert(data: any) {
    let questionToSave = this.questionRepository.create({
      text: data.text,
      feedback: data.feedback,
      score: data.score,
    });
    await this.questionRepository.save(questionToSave);
    const questionId = questionToSave.id;
    const answers: Answer[] = [];
    const answersFromUser = data.answers;
    for (let i = 0; i < answersFromUser.length; i++) {
      answers.push(
        this.answerRepository.create({
          text: data.answers[i].text,
          isCorrect: data.answers[i].isCorrect,
          questionId: questionId,
        }),
      );
    }
    await this.dataSource.manager.save(answers);
    return await this.questionRepository.findOne({
      where: { id: questionId },
      relations: {
        answers: true,
      },
    });
  }
}

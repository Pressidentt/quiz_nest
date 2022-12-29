import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Answer } from './entities/answer.entity';
import { Question } from './entities/question.entity';

@Injectable()
export class AnswersService{
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Answer>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    return await this.questionRepository.save(createQuestionDto);
  }

  async findAll() {
    return await this.questionRepository.find();
  }

  async findOne(id: number) {
    return await this.questionRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const question = await this.questionRepository.findOne({
      where: { id },
    });

    question.text = updateQuestionDto.text;
    return await this.questionRepository.save(question);
  }

  async remove(id: number) {
    const question = await this.questionRepository.findOne({
      where: { id },
    });
    return await this.questionRepository.remove(question);
  }
}

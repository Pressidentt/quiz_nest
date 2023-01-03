import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { AnswersService } from './answers.service';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateAnswerDto) {
    return await this.answersService.create(createQuestionDto);
  }

  @Get()
  async findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.answersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuestionDto: CreateAnswerDto,
  ) {
    return await this.answersService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.answersService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) { }

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return await this.questionsService.create(createQuestionDto);
  }

  @Get()
  async findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.questionsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return await this.questionsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.questionsService.remove(+id);
  }

  @Post('massInsert')
  async questionMassInsert(@Body() data: any) {
    return await this.questionsService.questionMassInsert(data);
  }

  @Get('checkMethod')
  async checkMethod() {
    return 'checkMethod';
  }
}

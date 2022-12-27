import { Controller, Get, Post, Render } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  root() {
    let messages = []
    messages = this.appService.getQuestions();
    return { message: 'Hello world!', firstQuestion: messages[0].question };
  }
  @Post('/quiz') 
  @Render('quizfinished')
  test(@Req() request: Request) {
    console.log(request.body)
  }
}

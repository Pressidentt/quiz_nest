import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getQuestions() {
    return [{
      question: 'What is the capital of France?'
    }]
  }
  async changeQuestion() {

  }
}
